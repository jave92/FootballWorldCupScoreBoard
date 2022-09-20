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

    const changeHandler = () => {

    }

    if(!props.homename || !props.awayname){
        return(
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">{title}</h4>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={props.newGame}>
                            <div>
                            <label>Home team: </label>
                            <input type="text" name="homename" value="" />
                            <label>Away team: </label>
                            <input type="text" name="awayname" value="" />
                            </div>
                            <button>Add new game</button>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button onClick={props.onClose} className="button">Close</button>
                    </div>
                </div>
            </div>
        );
    }else{
        return(
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">{title}</h4>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={props.newGame}>
                            <div>
                            <label>
                                Home team: <input name="homename" type="text" value={props.homename} onChange={changeHandler} />
                            </label>
                            </div>
                            <div>
                            <label>
                                Away team: <input name="awayname" type="text" value={props.homename} onChange={changeHandler} />
                            </label>
                            </div>
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
    
}

export default GameDetails;