import React, {useEffect, useState} from "react";
import "./Catalog.css"
import CatalogItem from "./CatalogItem";
import Axios from "axios";
import {ApiUrl} from "../App";
import {Link} from "react-router-dom";
import {ButtonLogin} from "../components/Buttons/Buttons";

export const categories = new Map (
    [
        ['Books', 10],
        ['Film', 11],
        ['Music', 12],
        ['Musicals & Theatres', 13],
        ['Television', 14],
        ['Video Games', 15],
        ['Board Games', 16],
        ['Science and Nature', 17],
        ['Computers', 18],
        ['Mathematics', 19],
        ['Mythology', 20],
    ]);


function Catalog() {

    const login = localStorage.getItem('login');
    const [favourite, setFavouriteCategory] = useState([]);
    useEffect(() => {
        Axios.get(`${ApiUrl}/users?login=${login}`).then(user => user.data).then(data => {
            const favouriteCategories = data.favourite;
            setFavouriteCategory(favouriteCategories);
        })
    }, [])

    localStorage.setItem('favourite', favourite);

    let cards = [];
    const keys = categories.keys();
    for (const key of keys) {
        let id = categories.get(key);
        cards.push(<CatalogItem categoryName={key} categoryId={id} key={id}/>);
    }

    return (
        <div className='catalog'>
            {localStorage.getItem('login') === null ? (
                <div className='catalog-check-login'>
                    <div >Войдите в аккаунт, чтобы сохранить прогресс</div>
                    <Link to='/login'><button type="submit" className='catalog-check-login-button'>Вход</button></Link>
                </div>
            ) : (
                <div>
                    <div className='catalog-title'>Викторины</div>
                    <div className='card-list'>
                        {cards}
                    </div>
                    <Link to='/random_quiz'>Викторина с вопросами из всех тем</Link>
                </div>

            )}

        </div>
    )
}

export default Catalog;
