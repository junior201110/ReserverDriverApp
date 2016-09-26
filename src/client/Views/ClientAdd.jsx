import React, {Component} from  'react';
import TextField from 'material-ui/TextField'
import {CardText} from 'material-ui/Card';
//nome, email, celular, endereço completo
class Client {
    constructor() {
        this.name = '';
        this.email = '';
        this.password = '';
        this.phone = '';
        this.category = 'client'; //dirver
        this.defaultAddress = ''
    }
}
export default class ClientAdd extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {client: new Client()}
    }

    getClient() {
        return this.state.client;
    }

    render() {
        return (
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
                        floatingLabelText="Senha"
                        fullWidth={true}
                        type="password"
                        onChange={(event, value)=>{
					    var {client} = this.state;
					    client.password = value;
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
					    client.phone = value;
					    this.setState({client});
					  }}
                    />
                </CardText>
                <CardText>
                    <TextField
                        fullWidth={true}
                        floatingLabelText="Endereço"
                        onChange={(event, value)=>{
						    var {client} = this.state;
						    client.defaultAddress = value;
						    this.setState({client});
						  }}
                    />
                </CardText>
            </div>
        )
    }
}