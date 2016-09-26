import React, {Component} from 'react';
import {render} from 'react-dom'
import Firebase from './connection';
import injectTapEventPlugin from 'react-tap-event-plugin';
import UserAdd from './containers/UserAdd.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Router, Route, hashHistory} from 'react-router';
import ApplicationMenu from './containers/ApplicationMenu.jsx'
import Context from './app/Context.jsx';
import Login from  './containers/Login.jsx';
import ClientDashboard from './client/Views/ClientDashboard.jsx';
import ClientSchedules from './client/Views/ClientSchedules.jsx';
import NewSchedule from './client/Views/NewSchedule.jsx';
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
			<Context>
				<MuiThemeProvider>
					<div>
						{this.props.children || <ApplicationMenu /> }
					</div>
				</MuiThemeProvider>
			</Context>
		)
	}
}
render((
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="adicionar" component={UserAdd}  />
			<Route path="login" component={Login}  />
			<Route path="cliente/:_uid" component={ClientDashboard} >
				<Route path="chamadas" component={ClientSchedules}>
					<Route path={'nova-chamada'} component={NewSchedule}/>
				</Route>
			</Route>
			<Route path="administrativo" component={ClientDashboard} />
		</Route>
	</Router>
), document.getElementById('container'));