import React, {Component} from 'react';
import './buttons.css';
import { Routes, Route, Link } from "react-router-dom";

export const Buttons = () => {
    return (
        <button
            className={'button_style'}
        >
            START
        </button>
    );
}



export const ButtonClose = () => {
    return (
        <button
            className={'button_style'}
        >
            Назад
        </button>
    );
}

export const ButtonAgain = () => {
    return (
        <button
            className={'button_style'}
        >
            Еще раз
        </button>
    );
}

export const ButtonLogin = () => {
    return (
        <button
            className={'button_style'}
        >
            ВОЙТИ
        </button>
    );
}


export const ButtonRating = () => {
    return (
        <button
            className={'button_style button_rating'}
        >
            Рейтинг
        </button>
    );
}


