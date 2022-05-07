import React, {Component} from "react";
import './chooseCategory.css'
import "../about.css"
import { Link} from "react-router-dom";

export class ChooseCategoryPage extends Component{

    constructor(props) {
        super(props);

        this.state = {
            category: {},
            difficulty : {}
        };

        this.clickFunc = this.clickFunc.bind(this);

    }

    // async clickFunc() {
    clickFunc()
    {
        const category = document.getElementById('category').value;
        const difficulty = document.getElementById('difficulty').value;
        localStorage.setItem("category", category);
        localStorage.setItem("difficulty", difficulty);
        window.location.href="/quiz_game";
    }
    // const category = document.getElementById('category').value;
    // const difficulty = document.getElementById('difficulty').value;
    // await this.setState({
    //     category: {category},
    //     difficulty : {difficulty}
    // })

    // document.location.href = '/quiz_game';

    // await fetch(
    //     `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`
    // ).then((r) => r.json()).then(response => {
    //     this.setState(response);
    // });
    // const quiz = await fetch(
    //     `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`
    // ).then((r) => r.json()).then()

    // }


    render() {
        return (
            <div>
                <select id="category">
                    <option value="hide">Category</option>
                    <option value="10">Books</option>
                    <option value="11">Film</option>
                    <option value="12">Music</option>
                    <option value="13">Musicals & Theatres</option>
                    <option value="14">Television</option>
                    <option value="15">Video Games</option>
                    <option value="25">Art</option>
                    <option value="23">History</option>
                    <option value="26">Celebrities</option>
                    <option value="27">Animals</option>

                </select>
                <select id="difficulty">
                    <option value="hide">Difficulty</option>
                    <option value="easy">easy</option>
                    <option value="medium">medium</option>
                    <option value="hard">hard</option>
                </select>
                <button onClick={this.clickFunc}>Начать</button>
            </div>
        )
    }
}
