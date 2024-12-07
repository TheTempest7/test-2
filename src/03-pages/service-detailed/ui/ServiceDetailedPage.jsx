import {Link, useParams} from "react-router-dom";
import {useEffect} from "react";
import {observer} from "mobx-react";
import serviceDetailedStore, {ServiceCard} from "06-entities/service-detailed";
import {Loader} from "07-shared/ui/Loader/Loader.jsx";
import {ErrorComponent} from "07-shared/ui/ErrorComponent/ErrorComponent.jsx";

export const ServiceDetailedPage = observer(() => {
    const {id} = useParams();

    const isLoading = serviceDetailedStore.isLoading;
    const error = serviceDetailedStore.errorMessage;

    const fetchServiceDetails = () => {
        serviceDetailedStore.fetchServiceDetails(id)
    }

    useEffect(()=> {
        fetchServiceDetails()

        return () => serviceDetailedStore.deleteDetails()
    },[]);

    return <div>
        <h4>ServiceDetailedPage</h4>
        <Link to={'/'}>На Главную</Link>
        {isLoading && <Loader/>}
        {error && !isLoading && <ErrorComponent error={error} onButtonHandler={fetchServiceDetails} />}
        {!isLoading && !error && <ServiceCard/>}
    </div>
})