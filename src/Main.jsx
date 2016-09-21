import React, {Component} from 'react';
import {render} from 'react-dom'
import Firebase from './connection';
import injectTapEventPlugin from 'react-tap-event-plugin';
import UserAdd from './containers/UserAdd.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Router, Route, hashHistory} from 'react-router';
import ApplicationMenu from './containers/ApplicationMenu.jsx'
import './sass/main.scss';
import './containers/applicationMenu.scss'
injectTapEventPlugin();
class Main extends Component{

	constructor(props, context) {
		super(props, context);
		Firebase.init()
	}

	render(){
		return (

			<MuiThemeProvider>
				<div>
					{this.props.children || <ApplicationMenu /> }
				</div>
			</MuiThemeProvider>
		)
	}
}
render((
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="add" component={UserAdd}  />
		</Route>
	</Router>
), document.getElementById('container'));