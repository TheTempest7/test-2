import {lazy, Suspense} from 'react';
import { Route, Routes} from 'react-router-dom';
import {Loader} from "07-shared/ui/Loader/Loader.jsx";
import {ServiceDetailedPage} from "03-pages/service-detailed/index.js";

const MainPage = lazy(() => import('03-pages/main/index.js'))

export const AppRouter = () => {

    return (
        <Suspense fallback={<Loader/>}>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/:id/details" element={<ServiceDetailedPage/>}/>
            </Routes>
        </Suspense>
    );
};
