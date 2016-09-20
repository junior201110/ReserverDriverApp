import React, {Component} from 'react';
import {render} from 'react-dom'
import Firebase from './connection'
class Main extends Component{

	constructor(props, context) {
		super(props, context);
		var firebase = new Firebase();
		console.log(firebase)
	}

	render(){
		return (
			<div>to work</div>
		)
	}
}

render(<Main />, document.getElementById('container'));