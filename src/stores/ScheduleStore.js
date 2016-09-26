import EventEmitter from 'events';
import ScheduleController,
{ACTION_REQUEST_USER_SCHEDULE_LIST} from './../controllers/ScheduleController';
import dispatcher from './../dispatcher/Dispatcher';
import firebase from './../connection/Firebase'
export const EVENT_RECEIVE_SCHEDULES  = 'EVENT_RECEIVE_SCHEDULES';

class ScheduleStore extends EventEmitter{
	getSchedules(uid){
		firebase.getUserSchedules(uid, (schedules)=>{
			this.emit(EVENT_RECEIVE_SCHEDULES, schedules);
		});
	}
}
var scheduleStore = new ScheduleStore();

dispatcher.register((payload)=>{
	switch (payload.action){
		case ACTION_REQUEST_USER_SCHEDULE_LIST:
			scheduleStore.getSchedules(payload.uid);
			break
	}
});
export default scheduleStore