import {makeAutoObservable, runInAction} from "mobx";
import {instance} from "07-shared/api/index.js";

class ServiceDetailedStore {
    details = null;
    isLoading = false;
    errorMessage = null;

    constructor() {
        makeAutoObservable(this);
    }

    deleteDetails() {
        this.details = null;
    }

    async fetchServiceDetails(id) {
        this.isLoading = true;
        this.errorMessage = '';

        try {
            const response = await instance.get(`/api/services/${id}`);

            runInAction(() => {
                this.details = response?.data;
                this.isLoading = false;
            });
        } catch (error) {
            runInAction(() => {
                this.errorMessage = error.message;
                this.isLoading = false;
            });
        }
    }
}

const serviceDetailedStore = new ServiceDetailedStore();
export default serviceDetailedStore;
