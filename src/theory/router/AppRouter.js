import {Link, Route, Routes, useNavigate} from 'react-router-dom';
import Dasboard from './Dasboard';
import Protected from './Protected';
import Layout from './Layout';
import Articles from './Articles';
import Auth from './Auth';

const AppRouter = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Routes</h1>
            <Link to='/' style={{marginRight: 10}}>Dasboard</Link>
            <Link to='/protected'>Protected</Link>
            <button onClick={() => navigate('/protected')}>Go to protected</button>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Dasboard/>}/>
                    <Route path='/protected' 
                           element={
                                <Auth>
                                    <Protected/>
                                </Auth>                                
                                }/>                        
                    <Route path='*' element={<div>Not foud 404</div>}/>
                    <Route path='/articles/:slug' element={<Articles/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default AppRouter;