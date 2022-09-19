import React from "react";
import '../stylesheets/Button.css'

function Button({text, isUpdateButton, handler}) {
    return(
        <button
            className={isUpdateButton ? 'btn-update' : 'btn-delete'}
            onClick={handler}>
            {text}
        </button>
    );
}

export default Button;