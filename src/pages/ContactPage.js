import React, {Component} from "react";
import Axios from "axios";
import "./Contact.css"

class ContactPage extends Component{

    handleSubmit(event) {
        event.preventDefault();
        let loginData ={
            login: localStorage.getItem('login'),
            message: event.target[0].value
        }

        Axios.post("http://46.101.210.56:8080/message", loginData)
        document.location.href = '/';
    }

    render () {
        return (
            <div className='login'>
                <div>Поделитесь своим мнением!</div>
                <form onSubmit={this.handleSubmit}>
                    <div id="message" className='text-area'/>
                    <textarea
                        type='text'
                        required
                        placeholder="Name"
                        ref={node => (this.inputMessage = node)}
                        className='input-message'/>
                    <div className='text-area'>
                        <button type="submit" className='input-button'>Отправить</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ContactPage;
