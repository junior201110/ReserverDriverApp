import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ScheduleController from './../../controllers/ScheduleController';
import {CardText,Card, CardTitle} from 'material-ui/Card'
import {List, ListItem} from 'material-ui/List';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import userStore from './../../stores/UserStore';
import scheduleStore, {EVENT_RECEIVE_SCHEDULES, EVENT_ADD} from './../../stores/ScheduleStore';
import FlatButton from 'material-ui/FlatButton'
import NewSchedule from './NewSchedule.jsx';
import CircularProgress from 'material-ui/CircularProgress';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add'
import moment from 'moment';
moment.locale('pt-br');
export default class ClientSchedules extends Component{
	constructor(props, context) {
		super(props, context);
		this.state = {
			schedules: [],
			showDialog: false,
			showLoader: false
		};
		setTimeout(()=>{
			ScheduleController.getScheduleList(this.props.params._uid);
		}, 1000);
	}

	componentDidMount() {
		scheduleStore.on(EVENT_RECEIVE_SCHEDULES, (schedules)=>{
			console.log(schedules);
			this.setState({schedules: schedules})
		});
	}

	render() {
		return (

			<div>
				{this.props.children ||
				(<div>
					<CardText>
						<CardTitle title="Chamadas"/>
						<CardText style={{padding:0}}>
							<List style={{height: 'calc(100vh - 212px)', overflow: 'auto'}} >
								{this.state.schedules.map((schedule, i)=>{
									return (
										<ListItem
											primaryText={'Camada para '+
											moment(schedule.startTimestamp).format('LL')}
											key={'scehduleListItem'+i} />
									)
								})}
							</List>
						</CardText>
					</CardText>
					<div style={{
						position: 'absolute',
						bottom: 16,
						right: 16,
						padding: 8
					}} className="scheduleNew">

						<FloatingActionButton
							onClick={()=>{
								this.context.router.push({
									pathname: '/cliente/'+userStore.getCurrentUser().uid+'/chamadas/nova-chamada'
								})
							}}
						>
							<ContentAdd />
						</FloatingActionButton>
					</div>
				</div>)}
			</div>
		);
	}

}
ClientSchedules.contextTypes = {
	router: PropTypes.object
};
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