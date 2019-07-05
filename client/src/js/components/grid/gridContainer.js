import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

const style = {
    grid: {
        margin: "0 -15px !important",
    }
};

const GridContainer = ({...props})=> {
    const { classes, children } = props;
    return (
        <Grid container
              direction="row"
              justify={props.justify || "flex-start"}
              alignItems= "center"
              spacing={props.spacing || 16}
        >
            {children}
        </Grid>
    );
};


export default withStyles(style)(GridContainer);
