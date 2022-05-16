import React, {Component} from "react";
import "./Login.css"
import Axios from "axios";
import {ApiUrl} from "../App";


class Registration extends Component{
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            passwordFlag: true,
            repeatPassword: '',
            passwordCheck: true

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showHidePassword = this.showHidePassword.bind(this);
        this.showHideRepeatPassword = this.showHideRepeatPassword.bind(this);
    }

    showHidePassword(){
        let input = document.getElementById("password-input");
        if (input.getAttribute('type') == 'password') {
            input.classList.add('view');
            input.setAttribute('type', 'text');
        } else {
            input.classList.remove('view');
            input.setAttribute('type', 'password');
        }
    }

    showHideRepeatPassword(){
        let input = document.getElementById("password-input-repeat");
        if (input.getAttribute('type') == 'password') {
            input.classList.add('view');
            input.setAttribute('type', 'text');
        } else {
            input.classList.remove('view');
            input.setAttribute('type', 'password');
        }
    }


    handleSubmit(event) {
        event.preventDefault();
        const numberTest = /[0-9]/;
        const lowerCaseTest = /[a-z|а-я]/;
        const upperCaseTest = /[A-Z| А-Я]/;
        const symbolTest = /[! ? . , + - * / =]/;
        let passwordFlag = true;


        if (event.target[2].value.length < 10) { passwordFlag = false }
        if (numberTest.test(event.target[2].value) === false) { passwordFlag = false; }
        if (lowerCaseTest.test(event.target[2].value) === false) { passwordFlag = false; }
        if (upperCaseTest.test(event.target[2].value) === false) { passwordFlag = false; }
        if (symbolTest.test(event.target[2].value) === false) { passwordFlag = false; }

        if (passwordFlag === true) {
            this.setState({
                password: event.target[2].value,
                passwordFlag: true,
                repeatPassword: event.target[3].value
            })

            if (this.state.password !== this.state.passwordCheck) { this.setState({
                passwordCheck: false
            })}

        } else {
            this.setState({
                passwordFlag: false
            })
        }

        if (this.passwordCheck === true) {
            let loginData ={
                login: event.target[0].value,
                password: event.target[2].value,
                name: event.target[1].value,
                score: 0,
                quizCount: 0
            }

            Axios.post(`${ApiUrl}/register`, loginData)
            localStorage.setItem('login', loginData.login);
            document.location.href = '/';
        }
    }

    render () {
        return (
            <div>
                <div className='login-name'>Регистрация</div>
                <div className='login'>
                    <form onSubmit={this.handleSubmit}>
                        <div id="login" className='text-area-register'>Логин</div>
                        <input type='email' placeholder="Введите Email" required ref={node => (this.inputLogin = node)} className='input'/>
                        <div id="name" className='text-area-register'>Имя пользователя</div>
                        <input type='text' placeholder="Введите имя" required ref={node => (this.inputName = node)} className='input'/>

                        <div id="password" className='text-area-register tooltip'>Пароль<ul className="tooltiptext">
                            <li>не менее 10 символов</li>
                            <li>как минимум одна заглавная и одна строчная буква</li>
                            <li>как минимум одна цифра</li>
                            <li>допустимые символы:~ ! ? @ # $ % ^ & *_ - + ( ) [ ] { }</li>
                        </ul></div>
                        <div className='input-password'>
                            <input type='password'  id="password-input" placeholder="Введите пароль" required ref={node => (this.inputPassword = node)} className='input'/>
                            <a href="#" className="password-control" onClick={this.showHidePassword}></a>
                        </div>
                        {this.state.passwordFlag===false && (
                            <div className='error-password'>Пароль должен содержать цифры, строчные и заглавные буквы, символы и минимум 10 символов</div>
                        )}

                        <div id="password" className='text-area-register'>Повторите пароль</div>
                        <div className='input-password'>
                            <input type='password'  id="password-input-repeat" placeholder="Повторите пароль" required ref={node => (this.inputPasswordRepeat = node)} className='input'/>
                            <a href="#" className="password-control" onClick={this.showHideRepeatPassword}></a>
                        </div>
                        {this.state.passwordCheck === false && (
                            <div className='error-password'>Пароли не совпадают!</div>
                        )}
                        <div className='text-area'>
                            <button type="submit" className='input-button'>Регистрация</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Registration;
