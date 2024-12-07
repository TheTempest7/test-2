import {makeAutoObservable, runInAction} from "mobx";
import {instance} from "07-shared/api/index.js";

class ServicesStore {
    services = null;
    isLoading = false;
    errorMessage = null;

    constructor() {
        makeAutoObservable(this);
    }

    async fetchServices() {
        this.isLoading = true;
        this.errorMessage = null;


        try {
            const response = await instance.get('/api/services');

            runInAction(() => {
                this.services = response?.data;
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

const servicesStore = new ServicesStore();
export default servicesStore;
