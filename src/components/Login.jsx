<<<<<<< HEAD
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
    }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(e){
        e.preventDefault();
        // здесь обрабатываем вход в систему
    }

    render(){
        return(
            <div className="login">
                <p className="login__welcome">
                    Вход
                </p>
                <form onSubmit={this.handleSubmit} className="login__form">
=======
import { useState } from "react";

function Login({ onSubmit }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangePass(e) {
        setPassword(e.target.value);
    }

    const handleSubmit = (evt) => {
        onSubmit(evt, { email, password });
    };

        return(
            <div className="autorization">
                <p className="autorization__welcome">
                    Вход
                </p>
                <form onSubmit={handleSubmit} className="autorization__form">
>>>>>>> 05802e5909635bcf5cb6f8d99b087e650d6f86b6
                    <input
                        required=""
                        type="email"
                        id="login-input-email"
                        name="input-email"
<<<<<<< HEAD
                        className="popup__input popup__input_type_photo"
                        placeholder="Email"
                    />
                    <span id="picture-input-name-error" className="popup__input-error" />
=======
                        className="autorization__input autorization__input_type_email"
                        placeholder="Email"
                        value={email}
                        onChange={handleChangeEmail}
                    />
>>>>>>> 05802e5909635bcf5cb6f8d99b087e650d6f86b6
                    <input
                        required=""
                        type="password"
                        id="login-input-pass"
                        name="input-pass"
<<<<<<< HEAD
                        className="popup__input popup__input_type_title"
                        placeholder="Пароль"
                    />
                    <span id="picture-input-link-error" className="popup__input-error" />
=======
                        className="autorization__input autorization__input_type_pass"
                        placeholder="Пароль"
                        value={password}
                        onChange={handleChangePass}
                    />
                    <button type="submit" className="button autorization__save-button">
                        Войти
                    </button>
>>>>>>> 05802e5909635bcf5cb6f8d99b087e650d6f86b6
                </form>
            </div>
        )
    }
<<<<<<< HEAD
}
=======

>>>>>>> 05802e5909635bcf5cb6f8d99b087e650d6f86b6
export default Login;