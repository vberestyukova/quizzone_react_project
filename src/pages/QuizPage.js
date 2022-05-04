import React, {Component} from "react";
import './quizPage.css'
import {ChooseCategoryPage} from "./ChooseCategoryPage/ChooseCategoryPage";

export class QuizPage extends Component{
    constructor(props) {
        super(props);

        this.state = {
            // quiz: {}
            // question: {},
            // answer: {}
        };
        this.getCategory = this.getCategory.bind(this);
        this.makeGame = this.makeGame.bind(this);
    }


    getCategory() {
        let category = localStorage.getItem("category");
        let difficulty = localStorage.getItem('difficulty');
        const resetValue =0;
        return [category, difficulty];
    }

    async makeGame(category, difficulty) {
        await fetch(
            `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`
        ).then((r) => r.json()).then(r => localStorage.setItem("json", JSON.stringify(r)));
    }

    render() {
        const [category, difficulty] = this.getCategory();
        this.makeGame(category, difficulty);
        // let doneGame = Promise.resolve(Promise.resolve(game)).then(quiz => console.log((quiz.results[0].question)));
        // Promise.resolve(Promise.resolve(game)).then(quiz => {
            // const questionCase = [];
            // const correct_answer = [];
            // const incorrect_answers = [];
            // for (let i = 0; i < 10; i++) {
            //     questionCase.push(quiz.results[i].question);
            //     correct_answer.push(quiz.results[i].correct_answer);
            //     incorrect_answers.push(quiz.results[i].incorrect_answers);
            // }
            // this.setState({
            //     quiz: quiz.results
            // })
        // });

        const quiz = localStorage.getItem('json');
        const quizInfo = JSON.parse(quiz).results;
        // console.log(quizInfo);
        const questionCase = [];
        const correct_answerCase = [];
        const incorrect_answersCase = [];
        // console.log(quizInfo);
        // console.log(quizInfo.results.correct_answer);
        for (let i = 0; i < 10; i++) {
            // questionCase.push((quizInfo[i]).question);
            // correct_answerCase.push((quizInfo.results[i]).correct_answer);
            // incorrect_answersCase.push((quizInfo.results[i]).incorrect_answers);
        }

        return (
            <div className='page_settings'>
                <div className='quiz'>
                    <div className='quiz_name'>Вопрос</div>
                    <div className='quiz_question'>Текст вопроса</div>
                    <input className='quiz_question_input'/>
                </div>
            </div>
        );
    }


}
