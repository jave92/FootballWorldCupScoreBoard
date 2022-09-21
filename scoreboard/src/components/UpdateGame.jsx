import React from "react";
import '../stylesheets/GameDetails.css';
import {useForm} from 'react-hook-form';

function GameDetails(props){

    const {register, errors, handleSubmit} = useForm();

    const onUpdated = (data, e) => {
        data.id = props.id;
        data.homename = props.homename;
        data.awayname = props.awayname;
        props.updateGame(data);
        e.target.reset();
        props.showSetter(false);
    }

    if(!props.show){
        return null;
    }

    return(
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Update Game Score</h4>
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
                        <button className="btn-accept">Update score</button>
                    </form>
                </div>
                <div className="modal-footer">
                    <button onClick={props.onClose} className="btn-back">Close</button>
                </div>
            </div>
        </div>
    );

    
}

export default GameDetails;