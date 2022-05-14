import React, {useEffect, useRef, useState} from "react";
import "./Catalog.css"
import Axios from "axios";
import {ApiUrl} from "../App";

const handleAnswer = (difficulty, categoryId) => {
    localStorage.setItem('category', categoryId);
    localStorage.setItem('difficulty', difficulty);
    window.location.href="/quiz_game";
}
function CatalogItem( {categoryName, categoryId}) {
    const myContainer = useRef(categoryName);
    const login = localStorage.getItem('login');
    const favourite = localStorage.getItem('favourite').split(',');
    for (const category of favourite) {
        if (myContainer.current.id === category) {
            myContainer.current.classList.add('like-light');
        }
    }

    function setFavouriteQuiz(categoryName) {
        if (myContainer.current.classList.contains('like-light')) {
            myContainer.current.classList.remove('like-light');
            Axios.post(`${ApiUrl}/delete`, {
                login: login,
                favourite: categoryName}
            ).then(response => console.log(response)).catch(function (error) {
                console.log(error);
            });

        } else {
            myContainer.current.classList.add('like-light');
            Axios.post(`${ApiUrl}/favourite`, {
                login: login,
                favourite: categoryName}
            ).then(response => console.log(response));
        }
    }


    return (
        <>
                <div className='card'>
                    <div className='card-header'>
                        <div id={categoryName} className='like' ref={myContainer} onClick={() => setFavouriteQuiz(categoryName)}/>
                        <h2>{categoryName}</h2>
                    </div>
                    <div className='card-difficulty'>
                        <button key={'easy'} onClick={() => handleAnswer('easy', categoryId)} className='button-difficulty'>Easy</button>
                        <button key={'medium'} onClick={() => handleAnswer('medium', categoryId)} className='button-difficulty'>Medium</button>
                        <button key={'hard'} onClick={() => handleAnswer('hard', categoryId)} className='button-difficulty'>Hard</button>
                    </div>
                </div>
        </>
    )
}

export default CatalogItem;
