import React from "react";
import '../stylesheets/GameDetails.css';
import {useForm} from 'react-hook-form';

function GameDetails(props){

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        console.log(data);

        props.newGame(data);

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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                            <label>Home team: </label>
                            <input type="text" {...register('homename', { required: true })}/>
                            <div>
                                {errors?.homename?.message}
                            </div>
                            <label>Away team: </label>
                            <input type="text" name="awayname" {...register('awayname', { required: true })}/>
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