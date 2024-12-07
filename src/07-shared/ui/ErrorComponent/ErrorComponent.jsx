import PropTypes from 'prop-types';

import s from './ErrorComponents.module.scss';

 export const  ErrorComponent =  ({error, onButtonHandler}) => {
    return <div className={s.wrapper}>
        <div className={s.content}>
            <p> Произошла ошибка: <span>{error}</span> </p>
            <button onClick={onButtonHandler} >Повторить запрос</button>
        </div>
    </div>
}


ErrorComponent.PropTypes = {
    error: PropTypes.string.isRequired,
    onButtonHandler: PropTypes.func.isRequired
}
