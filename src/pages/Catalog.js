import React from "react";
import "./Catalog.css"
import CatalogItem from "./CatalogItem";


// export const categories = new Map (
//     [
//         [10, 'Books'],
//         [11, 'Film'],
//         [12, 'Music'],
//         [13, 'Musicals & Theatres'],
//         [14, 'Television'],
//         [15, 'Video Games'],
//         [16, 'Board Games'],
//         [17, 'Science and Nature'],
//         [18, 'Computers'],
//         [18, 'Mathematics'],
//         [19, 'Mythology'],
//     ]);
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
    let cards = [];
    // let online = [];
    const keys = categories.keys();
    for (const key of keys) {
        let id = categories.get(key);
        cards.push(<CatalogItem categoryName={key} categoryId={id} key={id}/>);
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
                    {/*{online}*/}
                </div>
            </div>
        </div>
    )
}

export default Catalog;
