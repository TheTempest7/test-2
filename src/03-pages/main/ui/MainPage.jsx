import {useEffect} from "react";
import {observer} from "mobx-react";
import servicesStore, {ServicesList} from "06-entities/services";
import {ErrorComponent} from "07-shared/ui/ErrorComponent/ErrorComponent.jsx";
import {Loader} from "07-shared/ui/Loader/Loader.jsx";

 const MainPage = observer( () => {
     const error = servicesStore.errorMessage;
     const isLoading = servicesStore.isLoading;

     const fetchServices = () => {
         servicesStore.fetchServices()
     }

     useEffect(()=> {
         fetchServices()
     },[])

     return <div>
        <h2>MainPage</h2>
         {isLoading && <Loader/>}
         {error && !isLoading && <ErrorComponent error={error} onButtonHandler={fetchServices} />}
         {!error && !isLoading && <ServicesList/>}
    </div>
})

export default MainPage;