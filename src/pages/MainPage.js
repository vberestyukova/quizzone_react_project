import React from 'react';
import styles from "./mainPage.module.css"
// import  from "../components/ButtonStart/ButtonStart";
import { ButtonStart} from "../components/ButtonStart/ButtonStart";

import classNames from 'classnames';
import {Link} from "react-router-dom";

export const MainPage = () => {

        return (
            <div className={styles.main_body}>
                <div className={styles.logo}>QUIZZONE</div>
                <Link to='/catalog'><ButtonStart /></Link>
            </div>
        );
};


