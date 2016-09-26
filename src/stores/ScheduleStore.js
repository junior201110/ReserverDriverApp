import EventEmitter from 'events';
import ScheduleController,
{ACTION_REQUEST_USER_SCHEDULE_LIST, ACTION_REQUEST_ADD_NEW_SCHEDULE} from './../controllers/ScheduleController';
import dispatcher from './../dispatcher/Dispatcher';
import firebase from './../connection/Firebase'
export const EVENT_RECEIVE_SCHEDULES  = 'EVENT_RECEIVE_SCHEDULES';
export const EVENT_ADD = 'EVENT_ADD';

class ScheduleStore extends EventEmitter{
	getSchedules(uid){
		firebase.getUserSchedules(uid, (schedules)=>{
			this.emit(EVENT_RECEIVE_SCHEDULES, schedules);
		});
	}
	createSchedule(schedule){
		firebase.addNewSchedule(schedule);
	}
}
var scheduleStore = new ScheduleStore();

dispatcher.register((payload)=>{
	switch (payload.action){
		case ACTION_REQUEST_USER_SCHEDULE_LIST:
			scheduleStore.getSchedules(payload.uid);
			break;
		case ACTION_REQUEST_ADD_NEW_SCHEDULE:
			scheduleStore.createSchedule(payload.schedule);
			break;
	}
});
export default scheduleStore