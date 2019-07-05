import React from 'react';
import ReactDOM from 'react-dom'

import {HashRouter as Router, Route} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {indigoA200} from 'material-ui/styles/colors';

import {Navbar} from './components';
import App from './app';


const muiTheme = getMuiTheme({
	palette: {
		primary1Color: indigoA200,
    	primary2Color: indigoA200
	}
});

ReactDOM.render((
	<MuiThemeProvider muiTheme={muiTheme}>
		<Router>
			<div>
                <Navbar/>
				<App/>
			</div>
		</Router>
	</MuiThemeProvider>),
	document.getElementById('container')
);


