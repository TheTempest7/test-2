import {observer} from "mobx-react";
import serviceDetailedStore from "../model/slice/serviceDetailedSlice.js";
import {toJS} from "mobx";

export const ServiceCard = observer( () => {
const cardInfo = toJS(serviceDetailedStore.details);

    return <div>
        <h5>Детали услуги</h5>
        <div>
            <p><span>Товар</span><span>{cardInfo?.content}</span></p>
            <p><span>Цена</span><span>{cardInfo?.price}</span></p>
            <p><span>Услуга</span><span>{cardInfo?.name}</span></p>
        </div>
    </div>
});
