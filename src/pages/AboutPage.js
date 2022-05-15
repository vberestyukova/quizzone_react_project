import React from "react";
import "./about.css"
import { ButtonClose} from "../components/Buttons/Buttons";
import {Link} from "react-router-dom";


export const AboutPage = () => {
    return(
        <div className='page_settings'>
            <div className='text_frame'>
                <div>О проекте</div>
                <div className='main_text'>QuizZone - платформа для создания твоей вечеринки.

                    Испытай себя и покажи, кто тут самый умный! Пройди викторины по различным темам разной сложности, добавляй в избранное свои
                любимые категории! В личном кабинете ты найдешь рейтинг игроков и сможешь с ними соревноваться за звание самого эрудированного</div>
                <Link to='/'><ButtonClose/></Link>
            </div>
        </div>
    )
}
