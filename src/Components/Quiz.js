import React, { useContext, useState } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/QuestionBank';

const Quiz = () => {
    const { score, setScore, setGameState } = useContext(QuizContext);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");
    const nextQuestion = () => {
        if (Questions[currentQuestion].answer == optionChosen) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
    }
    const previousQuestion = () => {

        setCurrentQuestion(currentQuestion - 1);
    }
    const finishQuiz = () => {
        if (Questions[currentQuestion].answer == optionChosen) {
            setScore(score + 1);
        }
        setGameState("endScreen");
    }
    return (
        <div className="Quiz">
            <h1>{Questions[currentQuestion].prompt}</h1>
            <div className="options">
                <button className="btn" onClick={() => setOptionChosen("A")}>{Questions[currentQuestion].optionA}</button>
                <button className="btn" onClick={() => setOptionChosen("B")}>{Questions[currentQuestion].optionB}</button>
                <button className="btn" onClick={() => setOptionChosen("C")}>{Questions[currentQuestion].optionC}</button>
                <button className="btn" onClick={() => setOptionChosen("D")}>{Questions[currentQuestion].optionD}</button>
            </div>
            {currentQuestion == Questions.length - 1 ? (<button className="btn" onClick={finishQuiz}>Finish Quiz</button>) : (
                <div className="pn"><button onClick={previousQuestion} className="btn">Previous</button>
                    <button onClick={nextQuestion} className="btn">Next</button></div>
            )}
        </div>
    );
};

export default Quiz;