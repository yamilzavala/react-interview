import { Link, Routes, Route } from 'react-router-dom'
import {About, Education, Confirm, Contact} from '../components/steps'
import NotFound from '../components/NotFound'
import './Header.css';
import { useRef } from 'react';

const Header = ({buttonRef}) => {

    return (
            <>
                {/* <div>
                    <Link className='link' to='/'>Contact</Link>
                    <Link className='link' to='/education'>Education</Link>
                    <Link className='link' to='/about'>About</Link>
                    <Link className='link' to='/confirm'>Confirm</Link>
                </div> */}
                <Routes >
                    <Route index element={<Contact/>} ref={buttonRef}/>
                    <Route path='/education' element={<Education/>} ref={buttonRef}/>
                    <Route path='/about' element={<About/>} ref={buttonRef}/>
                    <Route path='/confirm' element={<Confirm/>} ref={buttonRef}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </>
       
    );
};

export default Header;