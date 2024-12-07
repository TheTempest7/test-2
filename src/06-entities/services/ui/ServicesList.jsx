import {observer} from "mobx-react";
import {toJS} from "mobx";
import {Link} from "react-router-dom";
import servicesStore from '../model/slice/servicesSlice.js'

export const ServicesList = observer(() => {
    const services = toJS(servicesStore.services)

    return <div>
        <h4>ServicesList</h4>
        <ul>
            {services?.map((service)=>{
                return <li key={service.id}>
                    <Link to={`${service.id}/details`}><span>{service.name}</span></Link>
                    <div><span>{service.price}</span></div>
                </li>
            })}
        </ul>
    </div>
});