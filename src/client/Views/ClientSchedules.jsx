import React, {Component} from 'react';
import ScheduleController from './../../controllers/ScheduleController';
import {CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton'
import scheduleStore, {EVENT_RECEIVE_SCHEDULES} from './../../stores/ScheduleStore';
export default class ClientSchedules extends Component{
	constructor(props, context) {
		super(props, context);
		this.state = {
			schedules: [],
		};
		setTimeout(()=>{
			ScheduleController.getScheduleList(this.props.params._uid);
		}, 1000);
	}

	componentDidMount() {
		scheduleStore.on(EVENT_RECEIVE_SCHEDULES, (schedules)=>{
			console.log(schedules);
			this.setState({schedules: schedules})
		})
	}

	render() {
		return (
			<div>
				{this.state.schedules.map((schedule, i)=>{
					return (
						<div key={'scehduleListItem'+i} >
							{schedule.clientDisplayName} -> {schedule.driverDisplayName}
						</div>
					)
				})}
				<div style={{
					position: 'fixed',
					width: '98vw',
					bottom: 0,
					padding: 8
				}} className="scheduleNew" >
					<div>
						<RaisedButton
							onClick={()=>{

							}}
							label={'Realizar Chamada'}
							primary={true}
						/>
					</div>
				</div>
			</div>
		);
	}

}
/*
 * clientDisplayName:
 "Daniela Fabri"
 clientPhotoURL:
 "https://pbs.twimg.com/profile_images/4516889942..."
 clientUid:
 "rY8jYIx0QXMztqMIwPcH0oEUGI52"
 createdAt:
 1474722156119
 driverComments:
 "Super profissional"
 driverDisplayName:
 "Renato Oliveira"
 driverEvalution:
 -1
 driverPhotoUrl:
 "http://www.material-ui.com/images/kerem-128.jpg"
 driverUid:
 "ln9QOeWCZWRT2IR76hNOteiFYcg1"
 elapsedTimestamp:
 10800
 endTimestamp:
 1474545756
 plannedTimestamp:
 10800
 service:
 "Atendimento na cidade"
 startAddress:
 "Av Olegário Maciel 203 - Santa Helena"
 startTimestamp:
 1474534956
 uniform:
 "Camisa Social"
 value:
 75

 *
 * */