import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid";

import React from "react";

class HeaderClass extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        const classes = this.props.classes;
        return (
            <Toolbar  className={classes.text.color}>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                >
                    <Grid container justify="flex-start" alignItems="center">
                            <h5>UNIT CONVERTER APP </h5>
                    </Grid>
                </Typography>
            </Toolbar>
        )
    }
}

export default HeaderClass;

