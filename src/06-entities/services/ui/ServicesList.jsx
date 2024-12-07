import {observer} from "mobx-react";
import {toJS} from "mobx";
import {Link} from "react-router-dom";
import servicesStore from '../model/slice/servicesSlice.js';

import s from './ServiceList.module.scss';

export const ServicesList = observer(() => {
    const services = toJS(servicesStore.services)

    return <div className={s.wrapper}>
        <h3>Cпиcок услуг</h3>
        <ul>
            {services?.map((service) => {
                return <li key={service.id} className={s.service}>
                    <Link to={`${service.id}/details`} className={s.link}>{service.name}: </Link>
                    <div><span>{service.price} ₽</span></div>
                </li>
            })}
        </ul>
    </div>
});
