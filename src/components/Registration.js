import React, {Component} from "react";
import "./Login.css"
import Axios from "axios";

class Registration extends Component{

    handleSubmit(event) {
        event.preventDefault();
        console.log(event.target[0].value);
        console.log(event.target[1].value);
        let loginData ={
            login: event.target[0].value,
            password: event.target[1].value
        }

        Axios.post("http://46.101.210.56:8080/register", loginData)
        //     .then(() => {
        //     console.log('Added user' + loginData.login);
        //     localStorage.setItem('login', loginData.login);
        //     document.location.href = '/';
        // })
        localStorage.setItem('login', loginData.login);
        document.location.href = '/';
    }

    render () {
        return (
            <div className='login'>
                <form onSubmit={this.handleSubmit}>
                    <div id="login" className='text-area'>Login</div>
                    <input type='text' ref={node => (this.inputLogin = node)} className='input'/>
                    <div id="password" className='text-area'>Password</div>
                    <input type='text' ref={node => (this.inputPassword = node)} className='input'/>
                    <div className='text-area'>
                        <button type="submit" className='input-button'>Регистрация</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Registration;
