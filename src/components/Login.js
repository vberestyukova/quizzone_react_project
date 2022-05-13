import React, {Component} from "react";
import "./Login.css"
import Axios from "axios";
import {Link} from "react-router-dom";

class Login extends Component{

    handleSubmit(event) {
        event.preventDefault();

        let loginData ={
            login: event.target[0].value,
            password: event.target[1].value
        }


        Axios.post("http://46.101.210.56:8080/login", loginData).then(() => {
            localStorage.setItem('login', loginData.login);
            document.location.href='/';
        }).catch(function (error) {
            alert(' Неверный пароль!');
        });
    }

    render () {
        return (
            <div className='login'>
                <form onSubmit={this.handleSubmit}>
                    <div id="login" className='text-area'>Login</div>
                    <input type='text' required ref={node => (this.inputLogin = node)} className='input'/>
                    <div id="password" className='text-area'>Password</div>
                    <input type='password'  required ref={node => (this.inputPassword = node)} className='input'/>
                    <div>
                        <button type="submit" className='input-button'>Вход</button>
                    </div>
                </form>
                <Link to='/registration' className='text-area-register'>Еще нет аккаунта? Регистрация</Link>
            </div>
        )
    }
}

export default Login;
