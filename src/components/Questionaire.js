import React from 'react'

function Questionaire({handleAnswer, handleNestQuestion, showAnswers, data: {question, correct_answer, answers}}) {
    return (
        <>
            <div className='container'>
                <div className='questionClass'>
                    <h1 dangerouslySetInnerHTML={{__html:question}} />
                </div>
                <div className='button-overall'>
                    {answers.map((answer, index) => {
                        const correctAndIncorrectAnswer = showAnswers ? (
                            answer === correct_answer ? "green-button" : "red-button"
                        ) : '';
                        return(
                            <button className={`normal-button ${correctAndIncorrectAnswer}`}
                                    key={answer}
                                    onClick = {() => handleAnswer(answer)}
                                    dangerouslySetInnerHTML={{__html:answer}} />
                        )
                    })}
                </div>

            </div>
            {showAnswers && (
                <button onClick={handleNestQuestion} className='next-question'>Далее</button>
            )}
        </>
    )
}
export default Questionaire

