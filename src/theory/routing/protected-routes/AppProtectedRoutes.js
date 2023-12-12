import {Routes, Route, Link, redirect} from 'react-router-dom';
import { Home, Dashboard, Landing, Analitics, Admin} from './pages';
import { useState } from 'react';
import ProtectedRoutes from './components/ProtectedRoutes';

const AppProtectedRoutes = () => {
    const [user, setUser] = useState(null);

    const login = () => {
        setUser({
            id: 1,
            name: 'yamil',
            permissions: ['analize'],
            role: ['admin']
        });
    }

    const logout = () => setUser(null)

    return (
            <>
                <Navigation/>
            
                {user ? <button onClick={logout}>Logout</button> 
                      : <button onClick={login}>LogIn</button> }

                <Routes>
                    <Route index element={<Landing/>}/>
                    <Route path="/landing" element={<Landing/>}/>
                    <Route element={<ProtectedRoutes isAllowed={!!user}/>}>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                    </Route>
                    <Route path="/analitics" element={
                        <ProtectedRoutes 
                          isAllowed={!!user && user.permissions.include('analize')}
                          redirectTo='/home'>
                            <Analitics/>
                        </ProtectedRoutes>
                    }/>
                    <Route path="/admin" element={
                        <ProtectedRoutes 
                          isAllowed={!!user && user.role.include('admin')}
                          redirectTo='/home'>
                            <Admin/>
                        </ProtectedRoutes>
                    }/>
                </Routes>
            </>
       
    );
};

function Navigation () {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/landing'>Landing</Link>
                    <Link to='/dashboard'>Dashboard</Link>
                    <Link to='/analitics'>Analitics</Link>
                    <Link to='/admin'>Admin</Link>
                    <Link to='/home'>Home</Link>
                </li>
            </ul>
        </nav>
    )
}

export default AppProtectedRoutes;