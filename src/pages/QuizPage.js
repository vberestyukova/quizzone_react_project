import React, {useState, useEffect} from 'react';
import { ButtonAgain } from "../components/ButtonStart/ButtonStart"
import './quizPage.css'
import Axios  from 'axios';
import Questions from '../components/Questionaire'
import {Link} from "react-router-dom";

let category = localStorage.getItem('category');
let difficulty = localStorage.getItem('difficulty');
const API = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`;

function QuizPage() {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showAnswers, setShowAnswers] = useState(false);



useEffect(() => {
    Axios.get(API).then(res => res.data).then(data => {
        const questions = data.results.map((question) => ({
            ...question,
                answers:[question.correct_answer, ...question.incorrect_answers].sort(() => Math.random() - 0.5)
        }))

        setQuestions(questions)
    })

}, [])

    const handleAnswer = (answer) => {
        if (!showAnswers) {
            if (answer === questions[currentIndex].correct_answer) {
                setScore(score + 1);
            }
        }
        setShowAnswers(true);
    }


    const handleNestQuestion = (answer) => {
        setCurrentIndex(currentIndex + 1);
        setShowAnswers(false);
    }

    if (currentIndex === 9) {
        if (localStorage.getItem('login') !== null) {
            let login = localStorage.getItem('login');
            Axios.post("http://46.101.210.56:8080/statistic", {
                login: login,
                score: score}).then(response => console.log(response));
        }
    }
    return ( questions.length > 0 ? (
        <div className='container'>
            {currentIndex >= 9 ? (
                    <div className='score'>
                        <h1>YOUR SCORE IS {score}</h1>
                        <Link to='/catalog'><ButtonAgain /></Link>
                    </div>
            ): (<Questions
                handleAnswer={handleAnswer}
                handleNestQuestion={handleNestQuestion}
                showAnswers={showAnswers}
                data={questions[currentIndex]} />
                )
            }
        </div>) :
            <div className='container'>
                <div>Loading... </div>
                <img src="./loader.gif"/>
            </div>


    );
}

export default QuizPage;
