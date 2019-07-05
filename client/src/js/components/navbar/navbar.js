import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import {Header} from '../index'



const classStyle = {
	text:{color:'black'},
};

var Navbar = () => (

	    <AppBar position="absolute" >
	        <Header classes = {classStyle}>
	                <Link style={classStyle.text} to='/dashboard'>Truebase</Link>
	        </Header>
	    </AppBar>
);

export default withRouter(Navbar);
