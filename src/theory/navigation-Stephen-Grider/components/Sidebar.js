import React from 'react';
import Link from './Link';
import style from './Sidebar.module.css'

const Sidebar = () => {
    
    const links = [
        {label: 'Accordion', path: '/accordion'},
        {label: 'Dropdown', path: '/'},
        {label: 'Button', path: '/button'},
    ]

    const renderedLinks = links.map((link, idx) => (
        <li className={style.flexItems} key={idx}> 
            <Link to={link.path}>{link.label}</Link>  
        </li>
    ))

    return (
        <nav>
            <ul className={style.container}>
               {renderedLinks}
            </ul>
        </nav>
    );
};

export default Sidebar;