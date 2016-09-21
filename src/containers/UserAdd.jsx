import React, {Component} from  'react';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ClientAdd from './../client/Views/ClientAdd.jsx'
import {CardText} from 'material-ui/Card';
import {Scrollbars} from 'react-custom-scrollbars'
import FlatButton from 'material-ui/FlatButton';
export default class UserAdd extends Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			type: null,
			data: {}
		}
	}
	render(){
		return(
			<div className="content content-large" >
				<CardText style={{padding: '0 16px 0 16px'}}>
					<SelectField
						onChange={(event, index, value)=>{
						this.setState({type: value})
					}}
						value={this.state.type}
						fullWidth={true}
						floatingLabelText={'Eu sou'}
					>
						<MenuItem value={'client'} primaryText={'Cliente'} />
						<MenuItem value={'driver'} primaryText={'Motorista'} />
					</SelectField>
				</CardText>
				<Scrollbars style={{height: 'calc(100vh - 164px)'}} autoHide={true}>
				{
					this.state.type == null ?
						<span>Selecione um tipo</span> :
						this.state.type == 'client' ? <ClientAdd ref="clientData" />:'MOTORISTA'
				}
				</Scrollbars>
				<CardText>
					<FlatButton primary={true} label="Concluir">

					</FlatButton>
				</CardText>
			</div>
		)
	}
}