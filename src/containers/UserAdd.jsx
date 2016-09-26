import React, {Component} from  'react';
import Paper from 'material-ui/Paper';
import Proptypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ClientAdd from './../client/Views/ClientAdd.jsx'
import {CardText} from 'material-ui/Card';
import {Scrollbars} from 'react-custom-scrollbars'
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import {Router} from 'react-router'
import UserController from './../controllers/UserController'
import userStore, {EVENT_USER_CREATE} from './../stores/UserStore';

export default class UserAdd extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            category: null,
            showLoader: false
        };
        this.requestAdd = this.requestAdd.bind(this);
        this.onUserChange = this.onUserChange.bind(this);
    }

    requestAdd() {
        this.setState({showLoader: true});
        var {category} = this.state;
        var data = null;
        if (category == 'client') {
            var {client} = this.refs;
            data = client.getClient();
            data.active = true;
        } else {
            var {driver} = this.refs;
            data = driver;
            data.active = false;
        }
        data.category = this.state.category;
        UserController.requestAdd(data);
    }

    componentDidMount() {
        userStore.on(EVENT_USER_CREATE, this.onUserChange)
    }

    componentWillUnmount() {
        userStore.removeListener(EVENT_USER_CREATE, this.onUserChange);
    }

    onUserChange(user) {
        this.setState({showLoader: false});
        this.context.router.push({
            pathname: `/cliente/${user.uid}`,
            state: {user: user}
        });
    }

    render() {
        return (
            <div className="content content-large">
                {this.state.showLoader ?
                    <div style={{
						position: 'absolute',
						zIndex: '10',
						background: 'rgba(255, 255, 255, 0.74)',
						width:'100%',
						height:'100%'
					}}>
                        <div style={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							display: 'flex',
							alignItems: 'center'
						}}>
                            <CircularProgress />
                        </div>
                    </div> : null }
                <CardText style={{padding: '0 16px 0 16px'}}>
                    <SelectField
                        onChange={(event, index, value)=>{
							this.setState({category: value})
						}}
                        value={this.state.category}
                        fullWidth={true}
                        floatingLabelText={'Eu sou'}
                    >
                        <MenuItem value={'client'} primaryText={'Cliente'}/>
                        <MenuItem value={'driver'} primaryText={'Motorista'}/>
                    </SelectField>
                </CardText>
                <Scrollbars style={{height: 'calc(100vh - 164px)'}} autoHide={true}>
                    {
                        this.state.category == null ?
                            <span>Selecione um tipo</span> :
                            this.state.category == 'client' ? <ClientAdd ref="client"/> : 'MOTORISTA'
                    }
                </Scrollbars>
                <CardText>
                    <FlatButton primary={true} onClick={()=>{this.requestAdd()}} label="Registrar">

                    </FlatButton>
                </CardText>
            </div>
        )
    }
}
UserAdd.contextTypes = {
    router: Proptypes.object
};