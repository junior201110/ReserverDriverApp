import React, {
	Component,
} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {CardText} from 'material-ui/Card';
import userStore from './../../stores/UserStore';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ScheduleController from './../../controllers/ScheduleController'
import scheduleStore, {EVENT_ADD} from './../../stores/ScheduleStore';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import FlatButton from 'material-ui/FlatButton';
import {Scrollbars} from 'react-custom-scrollbars';
import Snackbar from 'material-ui/Snackbar';
const IntlPolyfill = require('intl');
var DateTimeFormat = IntlPolyfill.DateTimeFormat;
require('intl/locale-data/jsonp/pt-BR');
class Schedule{
	constructor(client){
		this.createdAt =  null;
		this.clientUid = client.uid;
		this.clientDisplayName =  client.displayName || client.name;
		this.clientPhotoURL = client.photoURL;
		this.startAddress =  client.defaultAddress;
		this.service =  null;
		this.uniform = 'Terno';
		this.startTimestamp =  null;
		this.plannedTimestamp = '';
	}
}
Schedule.services =  ['Viagem', 'Atendimento na cidade', 'Transporte de cargas e mercadorias', 'Eventos festivos'];
export default class NewSchedule extends Component{
	constructor(props, context) {
		super(props, context);
		this.state = {
			schedule: new Schedule(userStore.getCurrentUser()),
			hour: null,
			date: null,
			showSnackbar: false
		}
	}

	componentDidMount() {
		scheduleStore.on(EVENT_ADD,()=>{
			this.setState({showSnackbar: true});
			setTimeout(()=>{
				this.setState({showSnackbar: false});
				this.context.router.push({
					pathname: '/cliente/'+this.props.params._uid+'/chamadas'
				})
			}, 4 * 1000);
		});
	}
	getSchedule(){
		var {hour, date, schedule} = this.state;
		var day = date.getDate()+'';
		var month = (date.getMonth() + 1) + '';
		day = day.length < 2 ? '0'+ day:day;
		month = month.length < 2 ? '0'+month : month;
		var time = `${day}/${month}/${date.getFullYear()} ${hour.getHours()}:${hour.getMinutes()}:00`;
		schedule.startTimestamp = moment(time, 'D/M/Y HH:mm:ss')._d.getTime();
		return schedule;
	}
	render() {
		return (
			<div>
				<Scrollbars style={{height: 'calc(100vh - 176px)'}} >
					<CardText>
						<SelectField
							fullWidth={true}
							floatingLabelText={'Tipo de Serviço'}
							value={this.state.schedule.service}
							onChange={(event,index, value)=>{
								var {schedule} = this.state;
								schedule.service = value;
								this.setState({schedule})
							}}>
							{
								Schedule.services.map((service, index)=>{
									return <MenuItem key={'ScheduleServiceItem'+index} primaryText={service} value={service} />
								})
							}
						</SelectField>
					</CardText>
					<CardText>
						<TextField
							fullWidth={true}
							floatingLabelText={'Endereço de Inicio'}
							value={this.state.schedule.startAddress}
							onChange={(event,value)=>{
								var {schedule} = this.state;
								schedule.startAddress = value;
								this.setState({schedule})
							}}
						/>
					</CardText>
					<CardText>
						<span>Traje do Motorista</span>
						<RadioButtonGroup style={{marginTop: 16}} onChange={(event, value)=>{
							var {schedule} = this.state;
							schedule.uniform = value;
							this.setState({schedule})
						}} name="uniform" defaultSelected={this.state.schedule.uniform}>
							<RadioButton
								value="Terno"
								label="Terno"
							/>
							<RadioButton
								value="Camisa Social"
								label="Camisa Social"
							/>
						</RadioButtonGroup>
					</CardText>
					<CardText>
						<span>Data e Hora de ínicio</span>
						<div style={{display: 'flex', flexWrap: 'wrap'}} >
							<DatePicker
								fullWidth={true}
								firstDayOfWeek={0}
								cancelLabel='cancelar'
								locale="pt-BR"
								DateTimeFormat={DateTimeFormat}
								hintText="Data"
								value={this.state.date}
								onChange={(a,date)=>{
									this.setState({date: date})
								}}
							/>
							<TimePicker
								fullWidth={true}
								format="24hr"
								hintText="Hora"
								value={this.state.hour}
								onChange={(hour, date)=>{
									this.setState({hour: date})
								}}
							/>
						</div>
					</CardText>
					<CardText>
						<TextField
							fullWidth={true}
							floatingLabelText={'Tempo estimado (horas)'}
							value={this.state.schedule.plannedTimestamp}
							onChange={(event, value)=>{
								var {schedule} = this.state;
								schedule.plannedTimestamp = value.replace(/\D/ig, '');
								this.setState({schedule})
							}}
						/>
					</CardText>
				</Scrollbars>
				<CardText>
					<FlatButton onClick={()=>{
						this.context.router.push({
							pathname: '/cliente/'+this.props.params._uid+'/chamadas'
						})
					}} secondary={true} label={'Cancelar'}/>
					<FlatButton  onClick={()=>{
						ScheduleController.requestAddNewSchedule(this.getSchedule());
					}} primary={true} label={'Abrir Chamada'}/>
				</CardText>
				<Snackbar
					open={this.state.showSnackbar}
					message="Chamada adicionada"
					autoHideDuration={4000}
				/>
			</div>
		);
	}
}
NewSchedule.contextTypes = {
	router: PropTypes.object
};
