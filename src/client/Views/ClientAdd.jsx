import React, {Component} from  'react';
import TextField from 'material-ui/TextField'
import {CardText} from 'material-ui/Card';
//nome, email, celular, endereço completo
class Client{
	constructor(){
		this.name = '';
		this.email = '';
		this.fone = '';
		this.address = {

		};
	}

}
export default class ClientAdd extends Component{
	constructor(props, context){
		super(props, context);
		this.state = {client: new Client()}
	}
	render(){
		return(
			<div>
				<CardText>
					<TextField
						floatingLabelText="Nome"
						fullWidth={true}
					  onChange={(event, value)=>{
					    var {client} = this.state;
					    client.name = value;
					    this.setState({client});
					  }}
					/>
				</CardText>
				<CardText>
					<TextField
						floatingLabelText="Email"
						fullWidth={true}
						onChange={(event, value)=>{
					    var {client} = this.state;
					    client.email = value;
					    this.setState({client});
					  }}
					/>
				</CardText>
				<CardText>
					<TextField
						floatingLabelText="Telefone"
						fullWidth={true}
						onChange={(event, value)=>{
					    var {client} = this.state;
					    client.fone = value;
					    this.setState({client});
					  }}
					/>
				</CardText>
				<CardText>
					<TextField
						floatingLabelText="Rua"
						onChange={(event, value)=>{
					    var {client} = this.state;
					    client.address.way = value;
					    this.setState({client});
					  }}
					/>
					<TextField
						floatingLabelText="Nº"
						style={{width: 96}}
						onChange={(event, value)=>{
					    var {client} = this.state;
					    client.address.number = value;
					    this.setState({client});
					  }}
					/>
					<div style={{display: 'flex'}}>
						<TextField
							fullWidth={true}
							floatingLabelText="Bairro"
							onChange={(event, value)=>{
						    var {client} = this.state;
						    client.address.neighborhood = value;
						    this.setState({client});
						  }}
						/>
						<TextField
							fullWidth={true}
							style={{marginleft: 8}}
							floatingLabelText="Cidade"
							onChange={(event, value)=>{
						    var {client} = this.state;
						    client.address.city = value;
						    this.setState({client});
						  }}
						/>
					</div>
					<TextField
						floatingLabelText="Estado"
						onChange={(event, value)=>{
					    var {client} = this.state;
					    client.address.province = value;
					    this.setState({client});
					  }}
					/>
				</CardText>
			</div>
		)
	}
}