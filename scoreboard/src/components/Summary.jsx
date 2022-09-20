import React from "react";
import '../stylesheets/Summary.css'
import { useLocation, useNavigate, Link } from "react-router-dom";

function Summary(props){

    const location = useLocation();
    const navigate = useNavigate();
    const summary = location.state.newArr;
    return(
        <div>
            <button onClick={() => navigate(-1)}>Back</button>
            {summary.map( (game, index) => 
                <p>{index+1}. {game.homename} {game.homescore} - {game.awayname} {game.awayscore}</p>
            )}
        </div>
    );

}

export default Summary;