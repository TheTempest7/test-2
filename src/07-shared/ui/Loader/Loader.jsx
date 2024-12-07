import s from './Loader.module.scss';
import PropTypes from "prop-types";

export const Loader = ({className=''}) => {
    return <div className={s.wrapper+' '+className}></div>
}

Loader.propTypes = {
    className: PropTypes.string,
}
