import React from "react";
import '../stylesheets/Game.css'
import Button from './Button'
import { useState } from 'react'

function Game(props){

    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);

    const update = () => {
        console.log("UPDATE");
    }

    const remove = () => {
        console.log("DELETE");
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
                    handler={update}
                />
                <Button 
                    text="Finish"
                    isUpdateButton={false}
                    handler={remove}
                />
            </div>
        </div>
    );
}

export default Game;