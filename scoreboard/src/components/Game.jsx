import React from "react";
import '../stylesheets/Game.css'
import Button from './Button'

function Game(props){

    const update = () => {
        console.log("UPDATE");
    }

    const remove = () => {
        console.log("DELETE");
    }

    return(
        <div className="game-container">
            <p className="team-name">{props.homename}</p>
            <p className="team-score">{props.homescore}</p>
            <span className="score-separator">-</span>
            <p className="team-score">{props.awayscore}</p>
            <p className="team-name">{props.awayname}</p>
            <div className="buttons-container">
                <Button 
                    text="Update"
                    isUpdateButton={true}
                    handler={update}
                />
                <Button 
                    text="Delete"
                    isUpdateButton={false}
                    handler={remove}
                />
            </div>
        </div>
    );
}

export default Game;