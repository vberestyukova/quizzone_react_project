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
            // console.log(favouriteCategory.length)
            // const categories = new Map ();
            if (favouriteCategory) {
                for (let i=0; i<favouriteCategory.length; i++) {
                    let id = categories.get(favouriteCategory[i]);
                    idCase.push(id)
                }
            }


            // console.log(idCase)
            // console.log(favouriteCategory)

            if (scoreUser===undefined) showScore(0);
            else showScore(scoreUser)
            getQuizCount(quizCountUser);
            setFavourite(favouriteCategory);
            setName(userName);
            setFavouriteId(idCase)

        })
    }, [])
    console.log(favouriteCategoriesId);
    console.log(favouriteCategories);
    let cards = [];

    for (let j=0; j< favouriteCategories.length; j++) {
        cards.push(<CatalogItem categoryName={favouriteCategories[j]} categoryId={favouriteCategoriesId[j]} key={favouriteCategoriesId[j]}/>)
    }
    // let categoriesMap = new Map();
    // for (const key of favouriteCategories) {
    //
    //     let id = categories.get(key);
    //     categoriesMap.set(key, id)
    //     // console.log(categoriesMap)
    //     // cards.push(<CatalogItem categoryName={key} categoryId={id} key={id}/>);
    // }
    //
    // const keys = categoriesMap.keys();
    // // console.log(keys);
    // for (const key of keys) {
    //     let id = categoriesMap.get(key);
    //     cards.push(<CatalogItem categoryName={key} categoryId={id} key={id}/>);
    // }
    // console.log(cards);
    // let rating = [];

    return (
        <div>
            <div  className='account'>
                <div className='account-login' >Привет, {name}!</div>
                {quizCount !==0 && quizCount !== undefined ? (
                    <div className='account-login'>Твой счет {score/quizCount}</div>
                ) : (
                    <div className='account-login'>Твой счет 0</div>
                )}
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
