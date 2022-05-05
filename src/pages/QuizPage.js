import React, {Component} from "react";
import ReactDOM from 'react-dom'
import './quizPage.css'
import {ChooseCategoryPage} from "./ChooseCategoryPage/ChooseCategoryPage";

export class QuizPage extends Component{
    constructor(props) {
        super(props);

        this.state = {
            // quiz: {}
            // question: {},
            answer: {}
        };
        this.getCategory = this.getCategory.bind(this);
        this.makeGame = this.makeGame.bind(this);
        this.doFind = this.doFind.bind(this);
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

    // quizActive(questionCase, correct_answerCase, incorrect_answersCase) {
    //
    //
    //
    //     // console.log(quizParent);
    //     for (let j = 0; j< 2; j++) {
    //         // console.log(questionCase[j]);
    //         // console.log('ANSWER!!!!   '+correct_answerCase[j]);
    //         for (let k=0; k < 3; k++) {
    //             // console.log('INCORRECT ANSWER!!!!   '+incorrect_answersCase[j][k]);
    //         }
    //     }
    // }

    doFind()  {
        console.log('click');
        console.log(this.state);
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

        const questionCase = [];
        const correct_answerCase = [];
        const allAnswersCase = [];
        for (let i = 0; i < 10; i++) {
            questionCase.push((quizInfo[i]).question);
            correct_answerCase.push((quizInfo[i]).correct_answer);
            allAnswersCase.push((quizInfo[i]).correct_answer);
            for (let k=0; k < 3; k++) {
                allAnswersCase.push(((quizInfo[i]).incorrect_answers)[k]);
            }
        }

        const getQuestion = () => {
            return questionCase[0];
        }
        const allAnswer0 = () => {
            return questionCase[0];
        }
        const allAnswer1 = () => {
            return questionCase[1];
        }


        return (
            <div className='page_settings'>
                <div className='quiz' id='quiz'>
                    <div className='quiz_name' id='name'>{getQuestion()}</div>
                    <ul className='answers'>
                        <li>
                            <label className= 'quiz_title'>
                                <input onClick={() => this.doFind()} onChange={event =>this.setState({answer: event.target.value})} type='radio' name='q1' />
                                {allAnswer0()}
                            </label>
                        </li>
                        <li>
                            <label className= 'quiz_title'>
                                <input onClick={() => this.doFind()} onChange={event =>this.setState({answer: event.target.value})} type='radio' name='q1' />
                                {allAnswer1()}
                            </label>
                        </li>
                        {/*<button onClick={() => this.doFind()}>Find Root Node</button>*/}
                    </ul>
                    {/*<div className='quiz_question'>Текст вопроса</div>*/}
                    {/*<input className='quiz_question_input'/>*/}
                    {/*<button>Далее</button>*/}
                </div>
            </div>
        );
    }


}
