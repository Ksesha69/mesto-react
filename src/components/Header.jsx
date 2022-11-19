import {useState, useEffect} from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from '../images/logo.svg';


function Header({ userAuth, userEmail, handleLogout }) {
    const [link, setLink] = useState("");
    const [linkText, setLinkText] = useState("");

    const location = useLocation();
    const currentLocation = location.pathname;

    useEffect(() => {
        switch(currentLocation) {
            case '/register':
            setLink('/login');
            setLinkText("Войти");
            break;
            case '/login':
            setLink('/register');
            setLinkText("Регистрация");
            break;
        }
    }, [currentLocation, userAuth]);


    return (
<header className="header">
    <img
        className="header__logo"
        alt="логотип"
        src={logo}
    />
<<<<<<< HEAD
    <button
    type='button'
    className='header__auth'>
        Войти
    </button>
=======
    <div className='header__auth'>
    <h3 className='header__auth_email'></h3>
    <button
    type='button'
    className='header__auth_link'>
        <Link 
        to={link}
        className="signup__link"
        >
            {linkText}
        </Link>
    </button>
    </div>
>>>>>>> 05802e5909635bcf5cb6f8d99b087e650d6f86b6
    </header>
    )
}

export default Header; 