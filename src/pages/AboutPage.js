import React from "react";
import "./about.css"
import { ButtonClose} from "../components/ButtonStart/ButtonStart";
import {Link} from "react-router-dom";


export const AboutPage = () => {

    return(
        <div className='page_settings'>
            <div className='text_frame'>
                <div>О проекте</div>
                <div className='main_text'>QuizZone - платформа для создания твоей вечеринки.

                    Подберите для себя одного или компании досуг на вечер, используя интеллектуального помощника, который, опираясь на ваши интересы, подберет для вас идеально подходящее развлечение. Данный проект подбирает различные варианты развлечений, учитывая количество игроков, интересы, тематику. Предлагается выбор между
                    викторинами, онлайн играми, активными и настольными играми для разного количество игроков.</div>
                <Link to='/'><ButtonClose/></Link>
            </div>
        </div>
    )
}
