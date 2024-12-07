import s from './App.module.scss';
import {AppRouter} from "./router/AppRouter.jsx";

const App = () => {
    return (
        <div className={s.wrapper}>
            <AppRouter/>
        </div>
    );
};

export default App;

