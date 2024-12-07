import {useEffect} from "react";
import {observer} from "mobx-react";
import servicesStore, {ServicesList} from "06-entities/services";
import {ErrorComponent} from "07-shared/ui/ErrorComponent/ErrorComponent.jsx";
import {Loader} from "07-shared/ui/Loader/Loader.jsx";

import s from './MainPage.module.scss';

 const MainPage = observer( () => {
     const error = servicesStore.errorMessage;
     const isLoading = servicesStore.isLoading;

     const fetchServices = () => {
         servicesStore.fetchServices();
     }

     useEffect(()=> {
         fetchServices();
     },[])

     return <div>
         {isLoading && <Loader className={s.loader}/>}
         {error && !isLoading && <ErrorComponent className={s.error} error={error} onButtonHandler={fetchServices} />}
         {!error && !isLoading && <ServicesList/>}
    </div>
})

export default MainPage;