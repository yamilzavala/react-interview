import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <nav>
                <ul>      
                    {/* <li>
                        <Link to='/create'>Create Note</Link>
                    </li> */}
                    <li>
                        <Link to='/user'>Create User</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;