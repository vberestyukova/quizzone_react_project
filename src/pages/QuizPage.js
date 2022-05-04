import React, {Component} from "react";
import './quizPage.css'

import {Link} from "react-router-dom";
import {ButtonClose} from "../components/ButtonStart/ButtonStart";
import {ChooseCategoryPage} from "./ChooseCategoryPage/ChooseCategoryPage";

export class QuizPage extends ChooseCategoryPage{


    render() {
        console.log(this.state);
        return (
            <div className='page_settings'>
                <div className='quiz'>
                    <div className='quiz_name'>Вопрос</div>
                    <div className='quiz_question'>Текст вопроса</div>
                    <input className='quiz_question_input'/>
                </div>
            </div>
        );
    }


}
