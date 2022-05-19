import React, {Component} from "react";
import "./Login.css"
import Axios from "axios";
import {Link} from "react-router-dom";
import {ApiUrl} from "../App";

class Login extends Component{
    constructor(props) {
        super(props);
        this.showHidePassword = this.showHidePassword.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();

        let loginData ={
            login: event.target[0].value,
            password: event.target[1].value
        }


        Axios.post(`${ApiUrl}/login`, loginData).then(() => {
            localStorage.setItem('login', loginData.login);
            document.location.href='/';
        }).catch(function (error) {
            alert(' Неверный пароль!');
        });
    }

    showHidePassword(){
        let input = document.getElementById("password-input");
        if (input.getAttribute('type') === 'password') {
            input.classList.add('view');
            input.setAttribute('type', 'text');
        } else {
            input.classList.remove('view');
            input.setAttribute('type', 'password');
        }
    }

    render () {
        return (
            <div>
                <div className='login-name'>Авторизация</div>
                <div className='login'>
                    <form onSubmit={this.handleSubmit}>
                        <div id="login" className='text-area-register'>Логин</div>
                        <input type='text' placeholder="Введите Email" required ref={node => (this.inputLogin = node)} className='input'/>
                        <div id="password" className='text-area-register'>Пароль</div>
                        <div className='input-password'>
                            <input type='password'  id="password-input" placeholder="Введите пароль" required ref={node => (this.inputPassword = node)} className='input'/>
                            <a href="#" className="password-control" onClick={this.showHidePassword} />
                        </div>
                        <div>
                            <button type="submit" className='input-button'>Вход</button>
                        </div>
                    </form>
                    <Link to='/registration' className='text-area-register'>Еще нет аккаунта? Регистрация</Link>
                </div>
            </div>
        )
    }
}

export default Login;
