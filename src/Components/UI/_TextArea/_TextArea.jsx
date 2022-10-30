import React from 'react';
import classes from "./_TextArea.module.css"
const _TextArea = (props) => {
    return (
        <textarea className={classes.inpt} {...props}/>
    );
};

export default _TextArea;