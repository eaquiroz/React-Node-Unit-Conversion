import React from "react";
import Button from '@material-ui/core/Button';

const BaseButton = (props) => {

    return (
        <Button
            {...props}
        >
            {props.children}
        </Button>
    )
};

export default BaseButton;
