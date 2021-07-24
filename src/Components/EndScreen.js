import React, { useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/QuestionBank'
import '../App.css';

const EndScreen = () => {
    const { score, setScore, setGameState } = useContext(QuizContext);

    const reStartQuiz = () => {
        setScore(0);
        setGameState("menu")
    }
    return (
        <div className="EndScreen">
            <h1>Quiz Finished</h1>
            <h3>{score} / {Questions.length}</h3>
            <button className="btn" onClick={reStartQuiz}>Restart</button>
        </div>
    );
};

export default EndScreen;