import React from 'react';
import img1 from './img/red-girl.jpeg'

const AppImg = () => {
    return (
        <div>
            {/* from server */}
            <label>from server</label>
            <img src='https://images.pexels.com/photos/4800598/pexels-photo-4800598.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='desc' />

            {/* from local public folder */}
            <label>from public folder</label>
            <img src='./images/red-girl.jpeg' alt='desc' />

            {/* from local src folder */}
            <label>from local src folder</label>
            <img src={img1}/>

        </div>
    );
};

export default AppImg;