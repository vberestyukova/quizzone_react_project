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
            console.log(score)
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


                    {/*{quizCount !==0 && quizCount !== undefined ? (*/}
                    {/*    <div className='medal'>*/}
                    {/*        <img src='./medal.png'/>*/}
                    {/*        <div className='account-login'>Твой счет {score/quizCount}</div>*/}
                    {/*    </div>*/}
                    {/*) : (*/}
                    {/*        <div className='account-login'>Твой счет 0</div>*/}
                    {/*)}*/}

                    {(quizCount !==0 && score/quizCount > 6) && (
                        <div className='medal'>
                            <img src='./medal.png'/>
                            <div className='account-login'>Твой счет {score/quizCount}</div>
                        </div>
                    )}

                    {(quizCount !==0 && score/quizCount > 4 && score/quizCount <6) && (
                        <div className='medal'>
                            <img src='./medal2.png'/>
                            <div className='account-login'>Твой счет {score/quizCount}</div>
                        </div>
                    )}

                    {(quizCount !==0 && score/quizCount < 4 && score/quizCount > 0) && (
                        <div className='medal'>
                            <img src='./medal3.png'/>
                            <div className='account-login'>Твой счет {score/quizCount}</div>
                        </div>
                    )}

                    {quizCount === 0 && <div className='account-login'>Твой счет 0</div>}

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
