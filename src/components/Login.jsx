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
                    <input
                        required=""
                        type="email"
                        id="login-input-email"
                        name="input-email"
                        className="popup__input popup__input_type_photo"
                        placeholder="Email"
                    />
                    <span id="picture-input-name-error" className="popup__input-error" />
                    <input
                        required=""
                        type="password"
                        id="login-input-pass"
                        name="input-pass"
                        className="popup__input popup__input_type_title"
                        placeholder="Пароль"
                    />
                    <span id="picture-input-link-error" className="popup__input-error" />
                </form>
            </div>
        )
    }
}
export default Login;