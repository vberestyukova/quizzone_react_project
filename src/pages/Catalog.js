import React, {useState} from "react";
import "./Catalog.css"
import CatalogItem from "./CatalogItem";


const categories = new Map (
    [
        [10, 'Books'],
        [11, 'Film'],
        [12, 'Music'],
        [13, 'Musicals & Theatres'],
        [14, 'Television'],
        [15, 'Video Games'],
        [16, 'Board Games'],
        [17, 'Science and Nature'],
        [18, 'Computers'],
        [18, 'Mathematics'],
        [19, 'Mythology'],
    ]);

const online = new Map (
    [
        [10, 'Books'],
        [11, 'Film'],
        [12, 'Music'],
        [13, 'Musicals & Theatres'],
        [14, 'Television'],
        [15, 'Video Games'],
        [16, 'Board Games'],
        [17, 'Science and Nature'],
        [18, 'Computers'],
        [18, 'Mathematics'],
        [19, 'Mythology'],
    ]);



function Catalog() {
    let cards = [];
    let online = [];
    for (let id = 10; id <= 19; id++) {
        let category = categories.get(id);
        cards.push(<CatalogItem categoryName={category} categoryId={id} key={id}/>);
    }

    for (let id = 10; id <= 19; id++) {
        let category = categories.get(id);
        online.push(<CatalogItem categoryName={category} categoryId={id} key={id}/>);
    }
    return (
        <div className='catalog'>
            <div>
                <div className='catalog-title'>Викторины</div>
                <div className='card-list'>
                    {cards}
                </div>
            </div>
            <div>
                <div className='catalog-title'>Онлайн игры</div>
                <div className='card-list'>
                    {online}
                </div>
            </div>
        </div>
    )
}

export default Catalog;
