import {observer} from "mobx-react";
import {toJS} from "mobx";

import serviceDetailedStore from "../model/slice/serviceDetailedSlice.js";

import s from './ServiceCard.module.scss';

export const ServiceCard = observer( () => {
const cardInfo = toJS(serviceDetailedStore.details);

    return <div className={s.wrapper}>
        <h3>Детали услуги</h3>
        <div className={s.infoContent}>
            <p><span>Товар: </span><span>{cardInfo?.content}</span></p>
            <p><span>Цена: </span><span>{cardInfo?.price} ₽</span></p>
            <p><span>Услуга: </span><span>{cardInfo?.name}</span></p>
        </div>
    </div>
});
