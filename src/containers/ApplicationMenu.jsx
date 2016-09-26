import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';

const style = {
    margin: 12,
};
export default class ApplicationMenu extends Component {
    render() {
        return (
            <div>
                <Paper className="content">
                    <div className="options-content">
                        <div className="logo-container">
                            <img src="/img/logo_maior.jpg" className="logo"/>
                        </div>
                        <Link to={'/login'}>
                            <RaisedButton label="Entrar" primary={true} style={style} />
                        </Link>
                        <Link to={'/adicionar'}>
                            <RaisedButton label="Registrar" style={style} />
                        </Link>
                    </div>
                </Paper>
            </div>
        )
    }
}
ApplicationMenu.contextTypes = {
    router: PropTypes.object
};