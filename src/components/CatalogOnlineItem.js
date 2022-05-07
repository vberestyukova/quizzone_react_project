import React from "react";
import "./Catalog.css"

const handleAnswer = (difficulty, categoryId) => {
    localStorage.setItem('category', categoryId);
    localStorage.setItem('difficulty', difficulty);
}
function CatalogItem( {name, link, imgLink}) {

    return (
        <>
            <div className='card'>
                <div className='card-header'>
                    <p> {name}</p>
                    {/*<a url=`${link}`>Играть</a>*/}
                </div>
                <div className='card-difficulty'>
                    <img/>
                    <button key={'easy'} onClick={() => handleAnswer('easy', link)} className='button-difficulty'>Easy</button>
                </div>
            </div>
        </>
    )
}

export default CatalogItem;
