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

        Axios.post("http://127.0.0.1:8080/register", loginData).then(response => console.log(response));
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
