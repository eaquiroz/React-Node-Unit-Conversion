import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import {Dashboard} from './containers'

const style = {
    content: {
        flexGrow: 1,
        padding: 16,
        height: '90vh',
        overflow: 'auto',
        background:'#f6f7f8',
        marginTop:75
    }
};

let App = ({...props}) => {
    const { classes } = props;
    return(
    <div className={classes.content}>
        <Dashboard/>
    </div>
    )
};

export default withStyles(style)(App);
