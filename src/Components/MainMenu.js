import React, { useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import '../App.css';
import Slide from 'react-reveal/Slide';

const MainMenu = () => {
    const { gameState, setGameState } = useContext(QuizContext);
    return (
        <div className="Menu">
            <Slide bottom>
                <button className="btn" onClick={() => { setGameState("quiz") }} >Start</button>
            </Slide>
        </div>
    );
};

export default MainMenu;