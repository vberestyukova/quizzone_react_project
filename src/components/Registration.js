import React, {Component} from "react";
import "./Login.css"
import Axios from "axios";
import {ApiUrl} from "../App";

class Registration extends Component{

    handleSubmit(event) {
        event.preventDefault();
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

    render () {
        return (
            <div className='login'>
                <form onSubmit={this.handleSubmit}>
                    <div id="login" className='text-area'>Login</div>
                    <input type='text' required ref={node => (this.inputLogin = node)} className='input'/>
                    <div id="name" className='text-area'>Name</div>
                    <input type='text' required ref={node => (this.inputName = node)} className='input'/>
                    <div id="password" className='text-area'>Password</div>
                    <input type='password' required ref={node => (this.inputPassword = node)} className='input'/>
                    <div className='text-area'>
                        <button type="submit" className='input-button'>Регистрация</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Registration;
