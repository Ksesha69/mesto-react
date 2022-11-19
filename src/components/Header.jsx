import React from 'react';
import logo from '../images/logo.svg';

function Header() {
    return (
<header className="header">
    <img
        className="header__logo"
        alt="логотип"
        src={logo}
    />
    <button
    type='button'
    className='header__auth'>
        Войти
    </button>
    </header>
    )
}

export default Header; 