import { Link, Routes, Route } from 'react-router-dom'
import {About, Education, Confirm, Contact} from '../components/steps'
import NotFound from '../components/NotFound'
import './Header.css';

const Header = () => {
    return (
            <>
                {/* <div>
                    <Link className='link' to='/'>Contact</Link>
                    <Link className='link' to='/education'>Education</Link>
                    <Link className='link' to='/about'>About</Link>
                    <Link className='link' to='/confirm'>Confirm</Link>
                </div> */}
                <Routes >
                    <Route index element={<Contact/>}/>
                    <Route path='/education' element={<Education/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/confirm' element={<Confirm/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </>
       
    );
};

export default Header;