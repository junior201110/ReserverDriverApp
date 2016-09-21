import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import RippleButton from './../components/RippleButton.jsx';
import {Link} from 'react-router';
export default class ApplicationMenu extends Component{
	constructor(props, context){
		super(props, context);
		this.state = {
		}
	}
	render(){
		return(
				<Paper className="content">
					<div className="options-content" >
						<Link to={'/add'} >
							<RippleButton>
								Entar
							</RippleButton>
						</Link>
						<Link to={'/add'}>
							<RippleButton>
								Criar cadastro
							</RippleButton>
						</Link>
					</div>
				</Paper>
		)
	}
}
ApplicationMenu.contextTypes = {
	router: PropTypes.object
};