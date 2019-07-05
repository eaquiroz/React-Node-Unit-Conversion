import React from "react";
import InputBase from '@material-ui/core/InputBase';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    input: {
        flex: 1,
        border: `2px solid rgba(128, 128, 128, 0.63)`,
        borderRadius: `4px`,
        padding: `2px 20px`,
        margin: `5px 0 4px`,
        width: `80%`,
    },
});

const Input = ({ handleChange, name, type, classes, placeholderText}) => {
    const placeholder = placeholderText;

    return (
        <InputBase type={type} name={name} onChange={(env)=>handleChange(env)} className={classes.input} placeholder={placeholder} />
    );
}

export default withStyles(styles)(Input);
