import React from "react";
import '../stylesheets/Game.css'
import Button from './Button'
import UpdateGame from "./UpdateGame";
import { useState } from 'react'

function Game(props){

    
    const [showUpdateGame, setShowUpdateGame] = useState(false);

    const updateHandler = () => {
        setShowUpdateGame(true);
    }

    const updateGame = game => {
        props.updateHandler(game);
        
    }

    return(
        <div className="game-container">
            <p className="team-name">{props.homename}</p>
            <p className="team-score">{props.homescore ? props.homescore : 0}</p>
            <span className="score-separator">-</span>
            <p className="team-score">{props.awayscore ? props.awayscore : 0}</p>
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
                <UpdateGame
                    show={showUpdateGame}
                    showSetter={setShowUpdateGame}
                    updateGame={updateGame}
                    onClose={() => setShowUpdateGame(false)}
                    id={props.id}
                    homename={props.homename}
                    awayname={props.awayname}
                    homescore={props.homescore}
                    awayscore={props.awayscore}

                />
            </div>
        </div>
    );
}

export default Game;