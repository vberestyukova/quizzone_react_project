import React from 'react';
import styles from "./mainPage.module.css"
import { Buttons, ButtonLogin} from "../components/Buttons/Buttons";
import {Link} from "react-router-dom";

export const MainPage = () => {

        return (
            <div className={styles.main_body}>
                <div className={styles.logo}>QUIZZONE</div>
                { localStorage.getItem('login') === null ?
                    <Link to='/login'><ButtonLogin /></Link>
                :<Link to='/catalog'><Buttons /></Link>}
            </div>
        );
};


