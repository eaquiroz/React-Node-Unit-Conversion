import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

const style = {
    grid: {
        margin: "0",
        padding:10
    }
};

const GridItem = ({...props})=> {
    const { classes, children, ...rest } = props;
    return (
        <Grid {...rest} className={classes.grid}>
            {children}
        </Grid>
    );
};

export default withStyles(style)(GridItem);
