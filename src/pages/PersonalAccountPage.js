import React, {Component, useState, useEffect} from "react";
import {categories} from "./Catalog";
import Axios from "axios";
import "./PersonalAccount.css"
import {Link} from "react-router-dom";
import CatalogItem from "./CatalogItem";
import {ButtonRating} from "../components/ButtonStart/ButtonStart";
import {ApiUrl} from "../App";


function PersonalAccountPage() {
    const [favouriteCategories, setFavourite] = useState([]);
    const [name, setName] = useState('');
    const [score, showScore] = useState(0);
    const [quizCount, getQuizCount] = useState(0);
    const login = localStorage.getItem('login');

    useEffect(() => {
        Axios.get(`${ApiUrl}/users?login=${login}`).then(user => user.data).then(data => {
            const favouriteCategories = data.favourite;
            const scoreUser = data.score;
            const quizCountUser = data.quizCount;
            const userName = data.name;

            if (scoreUser===undefined) showScore(0);
            else showScore(scoreUser)

            getQuizCount(quizCountUser);
            setFavourite(favouriteCategories);
            setName(userName);
        })
    }, [])

    let cards = [];
    for (const key of favouriteCategories) {
        let id = categories.get(key);
        cards.push(<CatalogItem categoryName={key} categoryId={id} key={id}/>);
    }

    // let rating = [];

        return (
            <div>
                <div  className='account'>
                    <div className='account-login' >Привет, {name}!</div>
                    <div className='account-login'>Твои избранные квизы:</div>
                </div>
                <div className='card-list cards-center'>
                    {cards}
                </div>
                <div>Средний score {Math.ceil(score/quizCount)}</div>
                <div className='button-rating'>
                    <Link to='/rating'><ButtonRating /></Link>
                </div>


            </div>
        )
}

export default PersonalAccountPage;
