import React, {Component} from 'react';
import './buttonStart.css';
import { Routes, Route, Link } from "react-router-dom";

export const ButtonStart = () => {
    return (
        <button
            className={'button_style'}
            // type={this.props.type}
        >
            START
        </button>
    );
}



export const ButtonClose = () => {
    return (
        <button
            className={'button_style'}
            // type={this.props.type}
        >
            Назад
        </button>
    );
}




