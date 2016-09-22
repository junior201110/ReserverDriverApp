import React, {Component} from 'react';
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton';
import LoginController from './../controllers/LoginController'
export default class Login extends Component{
	constructor(){
		this.state = {
			email: '',
			password: ''
		}
	}
	render(){
		return (
			<div>
				<TextField value={this.state.email} onChange={(event, value)=>{
					this.setState({email: value})
				}} />
				<TextField value={this.state.password} onChange={(event, value)=>{
					this.setState({password: value})
				}} type="password" />
				<FlatButton
					onClick={()=>{LoginController.requestLogin(this.state.email)}}
					label="Enviar"/>
			</div>
		)
	}

}