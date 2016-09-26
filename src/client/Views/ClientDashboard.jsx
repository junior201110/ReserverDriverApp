import React,{Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import userStore, {EVENT_USER_CHANGE} from './../../stores/UserStore';
import UserController from './../../controllers/UserController'
import MenuItem from 'material-ui/MenuItem';
export default class ClientDashboard extends Component{
	constructor(props, context){
		super(props, context);
		var client = userStore.getCurrentUser();
		this.state = {
			client: client,
			open: false
		};

		if(client === null){
			UserController.requestAuthenticate(props.params._uid)
		}

	}

	componentDidMount() {
		userStore.on(EVENT_USER_CHANGE, ()=>{
			this.setState({client: userStore.getCurrentUser()});
		})
	}

	componentWillUnmount() {

	}

	render(){
		if(this.state.client == null){
			return <div>aguarde...</div>
		}
		return(
			<div>
				<AppBar
					onLeftIconButtonTouchTap={()=>{
						this.setState({open: !this.state.open})
					}} />
				<Drawer
					onRequestChange={()=>{
						this.setState({open: false})
					}}
					docked={false}
					disableSwipeToOpen={true}
					open={this.state.open}>
					<MenuItem primaryText={'Inicio'} onTouchTap={()=>{
						this.setState({open: false});
						this.context.router.push({
							pathname: '/cliente/'+ this.props.params._uid
						})
					}}
					/>
					<MenuItem primaryText={'Chamadas'} onTouchTap={()=>{
						this.setState({open: false});
						this.context.router.push({
							pathname: '/cliente/'+ this.props.params._uid +'/chamadas'
						})
					}} />
				</Drawer>
				{this.props.children || 'dashboard'}
			</div>
		)
	}
}
ClientDashboard.contextTypes = {
	router: PropTypes.object
};