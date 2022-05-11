import React, {Component, useState, useEffect} from "react";
import {categories} from "./Catalog";
import Axios from "axios";
import "./PersonalAccount.css"
import {Link} from "react-router-dom";
import CatalogItem from "./CatalogItem";


function PersonalAccountPage() {
    const [favouriteCategories, setFavourite] = useState([]);
    const [favouriteView, show] = useState(false);
    const [score, showScore] = useState(0);
    const [quizCount, getQuizCount] = useState(0);
    const login = localStorage.getItem('login');
    //  getInfoByAccount() {
    //     const login = localStorage.getItem('login');
    //     Axios.get(`http://localhost:8080/users?login=${login}`).then(user => {
    //         // this.setState({login: user.data.login});
    //         // this.setState(stat);
    //     }).catch(function (error) {
    //         alert(error);
    //     });
    // }
    useEffect(() => {
        Axios.get(`http://localhost:8080/users?login=${login}`).then(user => user.data).then(data => {
            const favouriteCategories = data.favourite;
            const scoreNew = data.score;
            if (scoreNew===undefined) showScore(0);
            else showScore(scoreNew)
            const quizCount = data.quizCount;
            if (quizCount===undefined) showScore(0)
            else getQuizCount(quizCount);

            setFavourite(favouriteCategories);
        })
    }, [])

    let cards = [];
    for (const key of favouriteCategories) {
        let id = categories.get(key);
        cards.push(<CatalogItem categoryName={key} categoryId={id} key={id}/>);
    }


        return ( favouriteCategories.length > 0 ? (
            <div className='account'>
                <div className='account-login' >Привет, {login}!</div>
                <div>Избранные квизы</div>
                <div>
                    <div className='card-list'>
                        {cards}
                    </div>
                </div>
                <div>Средний score {score/quizCount}</div>

                <div className='account-rating'>Рейтинг игроков</div>
            </div>
        ) :
                <div className='account'>
                    <div className='account-login' >Loading...</div>
                </div>
        )
}

export default PersonalAccountPage;
