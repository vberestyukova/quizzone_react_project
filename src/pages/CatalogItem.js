import React from "react";
import "./Catalog.css"

const handleAnswer = (difficulty, categoryId) => {
    localStorage.setItem('category', categoryId);
    localStorage.setItem('difficulty', difficulty);
    window.location.href="/quiz_game";
}
function CatalogItem( {categoryName, categoryId}) {

    return (
        <>
                <div className='card'>
                    <div className='card-header'>
                        <div className='like'/>
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
