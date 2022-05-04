import React, {Component} from "react";
import './chooseCategory.css'
import "../about.css"
import { Link} from "react-router-dom";

export class ChooseCategoryPage extends Component{

    constructor(props) {
        super(props);

        this.state = {
            response: {}
        };

        this.clickFunc = this.clickFunc.bind(this);

    }

    async clickFunc() {

        const category = document.getElementById('category').value;
        const difficulty = document.getElementById('difficulty').value;
        // console.log(category, ' ', difficulty);
        await fetch(
            `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`
        ).then((r) => r.json()).then(response => {
            this.setState(response);
        });
        // const quiz = await fetch(
        //     `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`
        // ).then((r) => r.json()).then()

    }


    render() {
        return (
            <div>
                <select id="category">
                    <option value="hide">Category</option>
                    <option value="9">General Knowledge</option>
                    <option value="10">Books</option>
                    <option value="11">Film</option>
                    <option value="12">Music</option>
                    <option value="13">Musicals & Theatres</option>
                    <option value="10">Books</option>

                </select>
                <select id="difficulty">
                    <option value="hide">Difficulty</option>
                    <option value="easy">easy</option>
                    <option value="medium">medium</option>
                    <option value="hard">hard</option>
                </select>
                <Link to='/quiz_game'><button onClick={this.clickFunc}>Начать</button></Link>
            </div>
        )
    }
}
