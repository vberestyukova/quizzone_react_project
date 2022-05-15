import React, {Component} from "react";
import "./Login.css"
import Axios from "axios";
import {ApiUrl} from "../App";


class Registration extends Component{
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            flag: true
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();
        const numberTest = /[0-9]/;
        const lowerCaseTest = /[a-z|а-я]/;
        const upperCaseTest = /[A-Z| А-Я]/;
        const symbolTest = /[! ? . , + - * / =]/;
        let flag = true;


        if (event.target[2].value.length < 10) { flag = false }
        if (numberTest.test(event.target[2].value) === false) { flag = false; }
        if (lowerCaseTest.test(event.target[2].value) === false) { flag = false; }
        if (upperCaseTest.test(event.target[2].value) === false) { flag = false; }
        if (symbolTest.test(event.target[2].value) === false) { flag = false; }

        if (flag === true) {
            let loginData ={
                login: event.target[0].value,
                password: event.target[2].value,
                name: event.target[1].value,
                score: 0,
                quizCount: 0
            }
            this.setState({
                password: event.target[2].value,
                flag: true
            })
            Axios.post(`${ApiUrl}/register`, loginData)
            localStorage.setItem('login', loginData.login);
            document.location.href = '/';
        } else {
            this.setState({

                flag: false
            })
        }
    }

    render () {
        return (
            <div className='login'>
                <form onSubmit={this.handleSubmit}>
                    <div id="login" className='text-area'>Login</div>
                    <input type='email' required ref={node => (this.inputLogin = node)} className='input'/>
                    <div id="name" className='text-area'>Name</div>
                    <input type='text' required ref={node => (this.inputName = node)} className='input'/>
                    <div id="password" className='text-area'>Password</div>
                    <input type='password' required ref={node => (this.inputPassword = node)} className='input'/>
                    {this.state.flag===false && (
                        <div className='error-password'>Пароль должен содержать цифры, строчные и заглавные буквы, символы и минимум 10 символов</div>
                    )}

                    <div className='text-area'>
                        <button type="submit" className='input-button'>Регистрация</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Registration;
