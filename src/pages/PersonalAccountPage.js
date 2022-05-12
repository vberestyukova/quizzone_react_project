import React, {Component, useState, useEffect} from "react";
import {categories} from "./Catalog";
import Axios from "axios";
import "./PersonalAccount.css"
import {Link} from "react-router-dom";
import CatalogItem from "./CatalogItem";
import {ButtonLogin, ButtonRating} from "../components/ButtonStart/ButtonStart";


function PersonalAccountPage() {
    const [favouriteCategories, setFavourite] = useState([]);
    const [score, showScore] = useState(0);
    const [quizCount, getQuizCount] = useState(0);
    const login = localStorage.getItem('login');

    useEffect(() => {
        Axios.get(`http://46.101.210.56:8080/users?login=${login}`).then(user => user.data).then(data => {
            const favouriteCategories = data.favourite;
            const scoreUser = data.score;
            const quizCountUser = data.quizCount;

            if (scoreUser===undefined) showScore(0);
            else showScore(scoreUser)

            // if (quizCountUser===undefined) showScore(0)
            // else ;
            getQuizCount(quizCountUser);
            setFavourite(favouriteCategories);
        })
    }, [])

    let cards = [];
    for (const key of favouriteCategories) {
        let id = categories.get(key);
        cards.push(<CatalogItem categoryName={key} categoryId={id} key={id}/>);
    }

    let rating = [];



        return ( favouriteCategories.length > 0 ? (
            <div className='account'>
                <div className='account-login' >Привет, {login}!</div>
                <div>Избранные квизы</div>
                <div>
                    <div className='card-list'>
                        {cards}
                    </div>
                </div>
                <div>Средний score {Math.ceil(score/quizCount)}</div>

                <Link to='/rating'><ButtonRating /></Link>

            </div>
        ) :
                <div className='account'>
                    <div className='account-login' >Loading...</div>
                </div>
        )
}

export default PersonalAccountPage;
