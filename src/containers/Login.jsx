import React, {Component} from 'react';
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper'
import {CardText} from 'material-ui/Card';
import UserController from './../controllers/UserController';
import userStore, {EVENT_USER_CHANGE} from './../stores/UserStore';
import CircularProgress from 'material-ui/CircularProgress'
export default class Login extends Component{
	constructor(){
		super();

		this.state = {
			email: '',
			password: '',
			showLoader: false,
		}
	}

	componentDidMount() {
		userStore.on(EVENT_USER_CHANGE, ()=>{
			this.setState({showLoader: false});
			var user = userStore.getCurrentUser();
			if(user.category == 'client'){
				this.context.router.push({
					pathname: '/cliente/'+user.uid
				})
			}else{

			}
		})
	}

	render(){
		return (
			<Paper className="content">
				{this.state.showLoader ?
					<CircularProgress size={1} />:

					<div style={{marginTop: 96}} >
						<CardText>
							<TextField
								floatingLabelText="Email"
								fullWidth={true} value={this.state.email} onChange={(event, value)=>{
								this.setState({email: value})
							}} />
						</CardText>
						<CardText>
							<TextField
								floatingLabelText="Senha"
								fullWidth={true}
								value={this.state.password} onChange={(event, value)=>{
								this.setState({password: value})
							}} type="password"
							/>
							<RaisedButton
								style={{    marginTop: 22, float: 'right'}}
								primary={true}
								onClick={()=>{
									this.setState({showLoader: true})
									UserController.authenticateByUserAndPass(this.state)
								}}
								label="Entrar"
							/>
						</CardText>
					</div>}
			</Paper>
		)
	}
}
Login.contextTypes = {
	router: PropTypes.object
};