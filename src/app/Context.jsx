import React, {Component} from 'react';

export default class Context extends Component{
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return this.props.children;
	}

}