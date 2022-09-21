import React from "react";
import '../stylesheets/Summary.css'
import { useLocation, useNavigate, Link } from "react-router-dom";

function Summary(props){

    const location = useLocation();
    const navigate = useNavigate();
    const games = props.games;
    console.log(games);
    const goBack = () => {
        props.showSetter(false);
    }
    if(!props.show){
        return null;
    }

    if(games.length>0){
        let newArr = games.sort(
            function(a,b){
                if ((Number(a.homescore) + Number(a.awayscore)) < (Number(b.homescore) + Number(b.awayscore))) { return 1; }
                if ((Number(a.homescore) + Number(a.awayscore)) > (Number(b.homescore) + Number(b.awayscore))) { return -1; }
                return 0;
            }
        )
        return(
            <div className="summary-container">
                <div className="summary-content">
                    {newArr.map( (game, index) => 
                        <p>{index+1}. {game.homename} {game.homescore} - {game.awayname} {game.awayscore}</p>
                    )
                    }
                </div>
                <div className="summary-buttons-container">
                    <button className="btn-back" onClick={goBack}>Back</button>
                </div>
            </div>
        );
    }else{
        return(
            <div className="summary-container">
                <div className="summary-content">
                    <h1>No hay partidos</h1>
                </div>
                <div className="summary-buttons-container">
                    <button className="btn-back" onClick={goBack}>Back</button>
                </div>
            </div>
        );
    }

}

export default Summary;