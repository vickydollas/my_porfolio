import React from 'react';
import mems from '../images/vickyd.jpg'
import './Header.css'

function HeaderImage () {
    return (
        <div className='container'>
            <img 
            src={mems}
            alt='Error'
            className='headerimage-sizing'
            />
        </div>
    )
}
export default HeaderImage;