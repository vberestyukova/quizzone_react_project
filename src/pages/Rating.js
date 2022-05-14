import React, {useState, useEffect} from "react";
import Axios from "axios";
import "./PersonalAccount.css"
import {ApiUrl} from "../App";

function Rating() {
    const [rates, setRates] = useState([]);

    useEffect(() => {
        Axios.get(`${ApiUrl}/usersRating`).then(user => user.data).then(rates => {

            for (const user of rates) {
                if (user.quizCount !== 0) {
                    user.meanScore = user.score / user.quizCount;
                } else {
                    user.meanScore = 0;
                }
            }

            rates = rates.sort((a, b) => a.meanScore > b.meanScore ? -1 : 1);

            setRates(rates);
        })

    }, [])

    let preparedRates = [];
    let i = 1;
    for (const rate of rates) {
        preparedRates.push(<div key={rate._id}>{i}. {rate.login} - {Math.round(rate.meanScore)}</div>);
        i = i + 1;
    }

    return (
                <div className='rating'>
                    <div className='account-login'>Рейтинг игроков</div>
                    {preparedRates}
                </div>
            )
}

export default Rating;
