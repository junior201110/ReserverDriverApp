import React, {Component} from 'react';
import Ripple from './../animations/Ripple.jsx';

export default class RippleButton extends Component{
	state = {cursorPos: {}};
	handleClick = (e)=>{
		// Get Cursor Position
		let cursorPos = {
			top: e.clientY,
			left: e.clientX,
			time: Date.now()
		};
		this.setState({ cursorPos: cursorPos })
	};
	render(){
		return(
			<div {...this.props} className="Ripple-parent" onMouseUp={this.handleClick} >
				{this.props.children}
				<Ripple cursorPos={ this.state.cursorPos } />
			</div>
		)
	}
}