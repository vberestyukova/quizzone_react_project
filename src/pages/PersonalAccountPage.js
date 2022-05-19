import React, {Component, useState, useEffect} from "react";
import {categories} from "./Catalog";
import Axios from "axios";
import "./PersonalAccount.css"
import {Link} from "react-router-dom";
import CatalogItem from "./CatalogItem";
import {ButtonRating} from "../components/Buttons/Buttons";
import {ApiUrl} from "../App";


function PersonalAccountPage() {
    const [favouriteCategories, setFavourite] = useState([]);
    const [favouriteCategoriesId, setFavouriteId] = useState([]);
    const [name, setName] =useState('');
    const [score, showScore] = useState(0);
    const [quizCount, getQuizCount] = useState(0);
    const login = localStorage.getItem('login');

    useEffect(() => {
        Axios.get(`${ApiUrl}/users?login=${login}`).then(user => user.data).then(data => {
            const favouriteCategory = data.favourite;
            const scoreUser = data.score;
            const quizCountUser = data.quizCount;
            const userName = data.name;
            let idCase = [];

            if (favouriteCategory) {
                for (let i=0; i<favouriteCategory.length; i++) {
                    let id = categories.get(favouriteCategory[i]);
                    idCase.push(id)
                }
            }
            if (scoreUser===undefined) showScore(0);
            else showScore(scoreUser)
            getQuizCount(quizCountUser);
            setFavourite(favouriteCategory);
            setName(userName);
            setFavouriteId(idCase)

        })
    }, [])

    let cards = [];

    for (let j=0; j< favouriteCategories.length; j++) {
        cards.push(
            <CatalogItem
            categoryName={favouriteCategories[j]}
            categoryId={favouriteCategoriesId[j]}
            key={favouriteCategoriesId[j]}/>
        )
    }

    return (
        <div>
            <div  className='account'>
                <div className='account-login' >Привет, {name}!</div>
                {(quizCount !==0 && score/quizCount > 6) && (
                    <div className='medal'>
                        <img src='./medal.png'/>
                        <div className='account-login'>Твой счет {Math.round(score/quizCount)}</div>
                    </div>
                )}

                {(quizCount !==0 && score/quizCount > 4 && score/quizCount <6) && (
                    <div className='medal'>
                        <img src='./medal2.png'/>
                        <div className='account-login'>Твой счет {Math.round(score/quizCount)}</div>
                    </div>
                )}

                {(quizCount !==0 && score/quizCount < 4 && score/quizCount > 0) && (
                    <div className='medal'>
                        <img src='./medal3.png'/>
                        <div className='account-login'>Твой счет {Math.round(score/quizCount)}</div>
                    </div>
                )}
                {quizCount === 0 && <div className='account-login'>Вы еще не играли ни в одну игру</div>}
                <div className='account-login'>Твои избранные квизы:</div>
            </div>
            <div className='card-list cards-center'>
                {cards}
            </div>

            <div className='button-rating'>
                <Link to='/rating'><ButtonRating /></Link>
            </div>
        </div>
    )
}

export default PersonalAccountPage;
