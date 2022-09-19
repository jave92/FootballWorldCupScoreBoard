import React from "react";
import '../stylesheets/Game.css'
import Button from './Button'
import GameDetails from "./GameDetails";
import { useState } from 'react'

function Game(props){

    
    const [showGameDetails, setShowGameDetails] = useState(false);
    const [isNewGame, setIsNewGame] = useState(true);

    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);

    const updateHandler = () => {
        setIsNewGame(false);
        setShowGameDetails(true);
    }

    return(
        <div className="game-container">
            <p className="team-name">{props.homename}</p>
            <p className="team-score">{homeScore}</p>
            <span className="score-separator">-</span>
            <p className="team-score">{awayScore}</p>
            <p className="team-name">{props.awayname}</p>
            <div className="buttons-container">
                <Button 
                    text="Update"
                    isUpdateButton={true}
                    handler={updateHandler}
                />
                <Button 
                    text="Finish"
                    isUpdateButton={false}
                    handler={props.finishHandler}
                />
                <GameDetails
                    show={showGameDetails}
                    isNewGame={isNewGame}
                    onClose={() => setShowGameDetails(false)}
                    homename={props.homename}
                    awayname={props.homename}
                    homescore={props.homename}
                    awayscore={props.homename}

                />
            </div>
        </div>
    );
}

export default Game;