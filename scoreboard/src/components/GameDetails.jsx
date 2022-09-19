import React from "react";
import '../stylesheets/GameDetails.css'

function GameDetails(props){

    var title = "";

    if(!props.show){
        return null;
    }

    if(props.isNewGame){
        title = "New Game";
    }else{
        title = "Update Game Score";
    }

    const handleSubmit = () => {

    }

    const changeHandler = () => {

    }


    return(
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">{title}</h4>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name: <input type="text" value={props.homename} onChange={changeHandler} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div className="modal-footer">
                    <button onClick={props.onClose} className="button">Close</button>
                </div>
            </div>
        </div>
    );
}

export default GameDetails;