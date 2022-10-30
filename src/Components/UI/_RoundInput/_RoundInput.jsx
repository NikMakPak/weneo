import React from 'react';
import classes from "./_RoundInput.module.css";
const _RoundInput = (props) => {
    return (
        <input className={classes.inpt} {...props}/>
    );
};

export default _RoundInput;