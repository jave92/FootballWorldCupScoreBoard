import React from "react";
import '../stylesheets/NewGame.css';
import {useForm} from 'react-hook-form';

function NewGame(props){

    const {register, errors, handleSubmit} = useForm();

    const onAdded = (data, e) => {
        data.homescore = 0;
        data.awayscore = 0;
        props.newGame(data);

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
                    <h4 className="modal-title">New Game</h4>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit(onAdded)}>
                        <div>
                            <input type="text" placeholder="Home team" defaultValue="" onChange={e=>props.homename = e.target.value} {...register('homename', { required: true })}/>
                            <div>
                                {errors?.homename?.message}
                            </div>
                            <input type="text" placeholder="Away team" defaultValue="" {...register('awayname', { required: true })}/>
                            <div>
                                {errors?.awayname?.message}
                            </div>
                        </div>
                        <button className="btn-accept">Add new game</button>
                    </form>
                </div>
                <div className="modal-footer">
                    <button onClick={props.onClose} className="btn-back">Close</button>
                </div>
            </div>
        </div>
    );
    
    
}

export default NewGame;