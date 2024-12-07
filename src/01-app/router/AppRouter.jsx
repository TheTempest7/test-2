import {  Suspense } from 'react';
import { Route, Routes} from 'react-router-dom';
import {MainPage} from "03-pages/main/index.js";

const About = () => <h2>About Page</h2>;

export const AppRouter = () => {

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/:id" element={<About/>}/>
            </Routes>
        </Suspense>
)
    ;
};
