import React, {
	Component,
} from 'react';
import Dialog from 'material-ui/Dialog';

class Schedule{
	constructor(client){
			this.createdAt =  null;
			this.clientUid = client.uid;
			this.clientDisplayName =  client.displayName;
			this.clientPhotoURL = client.photoURL;
			this.startAddress =  client.defaultAddress;
			this.service =  null;
			this.uniform = null;
			this.startTimestamp =  null;
			this.plannedTimestamp = null;
	}
}

export default class NewSchedule extends Component{
	constructor(props, context) {
		super(props, context);
		this.state = {
			schedule: new Schedule()
		}
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div>
				
			</div>
		);
	}
}
