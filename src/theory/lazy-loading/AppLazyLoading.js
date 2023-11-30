import {Link, Routes, Route} from 'react-router-dom';
import React from 'react'
import Home from './Home'
const About = React.lazy(() => import('./About'));

const AppLazyLoading = () => {
    return (
        <div>
            <Link to='/' style={{marginRight: 10}}>Home</Link>
            <Link to='/about'>About</Link>

            <Routes>
                <Route index element={<Home/>} />
                <Route path='/about' element={
                    <React.Suspense fullback={<div>Loading...</div>}>
                        <About/>
                    </React.Suspense>
                } />
            </Routes>
        </div>
    );
};

export default AppLazyLoading;