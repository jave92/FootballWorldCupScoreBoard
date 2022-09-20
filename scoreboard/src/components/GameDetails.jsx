import React from "react";
import '../stylesheets/GameDetails.css';
import {useForm} from 'react-hook-form';

function GameDetails(props){

    const {register, errors, handleSubmit} = useForm();

    const onAdded = (data, e) => {
        data.homescore = 0;
        data.awayscore = 0;
        props.newGame(data);

        e.target.reset();
    }

    const onUpdated = (data, e) => {
        data.id = props.id;
        data.homename = props.homename;
        data.awayname = props.awayname;
        props.updateGame(data);
        e.target.reset();
    }

    var title = "";

    if(!props.show){
        return null;
    }

    if(props.isNewGame){
        title = "New Game";
    }else{
        title = "Update Game Score";
    }

    //If empty props, then its a new Game
    if(!props.homename || !props.awayname){
        
        return(
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">{title}</h4>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit(onAdded)}>
                            <div>
                            <label>Home team: </label>
                            <input type="text" defaultValue="" {...register('homename', { required: true })}/>
                            <div>
                                {errors?.homename?.message}
                            </div>
                            <label>Away team: </label>
                            <input type="text" defaultValue="" {...register('awayname', { required: true })}/>
                            <div>
                                {errors?.awayname?.message}
                            </div>
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
    //If props, then its an update
    }else{
        return(
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">{title}</h4>
                    </div>
                    <div className="modal-body">
                    <form onSubmit={handleSubmit(onUpdated)}>
                            <div>
                            <label>Home team: {props.homename}</label>
                            <input type="number" defaultValue={props.homescore ? props.homescore : 0} {...register('homescore', { required: true })}/>
                            <div>
                                {errors?.homename?.message}
                            </div>
                            <label>Away team: {props.awayname}</label>
                            <input type="number" name="awayname" defaultValue={props.awayscore ? props.awayscore : 0} {...register('awayscore', { required: true })}/>
                            <div>
                                {errors?.awayname?.message}
                            </div>
                            </div>
                            <button>Update score</button>
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