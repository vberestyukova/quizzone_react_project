import React, {Component} from "react";
import "./Login.css"
import Axios from "axios";
import {ApiUrl} from "../App";


class Registration extends Component{
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            passwordCheck: true,
            passwordRepeat: '',
            passwordRepeatCheck: true,
            emailCheck: true,
            email: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showHidePassword = this.showHidePassword.bind(this);
        this.showHidepasswordRepeat = this.showHidepasswordRepeat.bind(this);
        this.checkPassword = this.checkPassword.bind(this);
        this.checkEmail = this.checkEmail.bind(this);
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

    showHidepasswordRepeat(){
        let input = document.getElementById("password-input-repeat");
        if (input.getAttribute('type') == 'password') {
            input.classList.add('view');
            input.setAttribute('type', 'text');
        } else {
            input.classList.remove('view');
            input.setAttribute('type', 'password');
        }
    }

    handleChange(event) {
        this.setState({password: event.target.value});

    event.preventDefault();
            const numberTest = /[0-9]/;
            const lowerCaseTest = /[a-z|а-я]/;
            const upperCaseTest = /[A-Z| А-Я]/;
            const symbolTest = /[! ? . , + - * / =]/;

            function check() {
                if (event.target.value.length < 10) { return false }
                if (numberTest.test(event.target.value) === false) { return false }
                if (lowerCaseTest.test(event.target.value) === false) { return false }
                if (upperCaseTest.test(event.target.value) === false) { return false }
                if (symbolTest.test(event.target.value) === false) { return false }

                return true
            }
            this.setState({
                passwordCheck: check()
            })

    }

    checkPassword(event) {
        this.setState({passwordRepeat: event.target.value});
        let passwordCorrect = this.state.password;
        function repeatCheck(password) {
            if (password !== event.target.value) { return false }
            return true
        }
        this.setState({
            passwordRepeatCheck: repeatCheck(passwordCorrect)
        })
    }

    checkEmail(event) {
        let checkEmail = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/;
        this.setState({email: event.target.value});
        function checkMailFunc() {
            if (checkEmail.test(event.target.value) === false) { return false }
            return true
        }
        this.setState({
            emailCheck: checkMailFunc()
        })
    }


    handleSubmit(event) {
        event.preventDefault();
        let loginData ={
                        login: event.target[0].value,
                        password: event.target[2].value,
                        name: event.target[1].value,
                        score: 0,
                        quizCount: 0
                    }

                    Axios.post(`${ApiUrl}/register`, loginData).then(() => {
                        localStorage.setItem('login', loginData.login);
                        document.location.href = '/';
                    }).catch(function (error) {
                        alert(' Пользователь с таким email уже существует!');
                    });
        }



    render () {
        return (
            <div>
                <div className='login-name'>Регистрация</div>
                <div className='login'>
                    <form onSubmit={this.handleSubmit}>
                        <div id="login" className='text-area-register'>Логин</div>
                        <input type='email' onChange={this.checkEmail} placeholder="Введите Email" required ref={node => (this.inputLogin = node)} className='input'/>
                        {this.state.emailCheck === false && (
                            <div className='error-password'>Введите email вида user@mail.ru</div>
                        )}
                        {(this.state.emailCheck === true && this.state.email.length !== 0) && (
                            <div className='correct-password'>Email подходит</div>
                        )}
                        <div id="name" className='text-area-register'>Имя пользователя</div>
                        <input type='text' placeholder="Введите имя"  required ref={node => (this.inputName = node)} className='input'/>

                        <div id="password" className='text-area-register tooltip'>Пароль<ul className="tooltiptext">
                            <li>не менее 10 символов</li>
                            <li>как минимум одна заглавная и одна строчная буква</li>
                            <li>как минимум одна цифра</li>
                            <li>допустимые символы:~ ! ? @ # $ % ^ & *_ - + ( ) [ ] { }</li>
                        </ul></div>
                        <div className='input-password'>
                            <input type='password' onChange={this.handleChange}  id="password-input" placeholder="Введите пароль" required ref={node => (this.inputPassword = node)} className='input'/>
                            <a href="#" className="password-control" onClick={this.showHidePassword}></a>
                        </div>
                        {this.state.passwordCheck === false && (
                            <div className='error-password'>Пароль должен содержать цифры, строчные и заглавные буквы, символы и минимум 10 символов! </div>
                        )}
                        {(this.state.passwordCheck === true && this.state.password.length !== 0) && (
                            <div className='correct-password'>Пароль подходит</div>
                        )}
                        <div id="password" className='text-area-register'>Повторите пароль</div>
                        <div className='input-password'>
                            <input type='password' onChange={this.checkPassword} id="password-input-repeat" placeholder="Повторите пароль" required ref={node => (this.inputpasswordCheck = node)} className='input'/>
                            <a href="#" className="password-control" onClick={this.showHidepasswordRepeat}></a>
                        </div>
                        {this.state.passwordRepeatCheck === false && (
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


// pattern="(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}"
