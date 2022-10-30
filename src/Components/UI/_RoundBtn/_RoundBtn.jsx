import React from 'react';
import classes from "./_RoundBtn.module.css";
const _RoundBtn = ({children, ...props}) => {
    return (
        <button {...props} className={classes.btn}>{children}</button>
    );
};

export default _RoundBtn;