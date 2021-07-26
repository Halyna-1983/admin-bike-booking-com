import React from 'react';
import './Header.css';

const Header = ({title}) => {
return (
    <div>
        <h1 className='Header-title'>{title}</h1>
    </div>
)
}

export default Header;