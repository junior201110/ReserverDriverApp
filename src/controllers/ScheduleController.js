import dispatcher from './../dispatcher/Dispatcher';
export const ACTION_REQUEST_USER_SCHEDULE_LIST = 'ACTION_REQUEST_USER_SCHEDULE_LIST';
export const ACTION_REQUEST_ADD_NEW_SCHEDULE = 'ACTION_REQUEST_ADD_NEW_SCHEDULE';

export default class ScherduleController{
	static getScheduleList(uid){
		dispatcher.dispatch({
			action: ACTION_REQUEST_USER_SCHEDULE_LIST,
			uid: uid
		})
	}

	static requestAddNewSchedule(schedule) {
		dispatcher.dispatch({
			action: ACTION_REQUEST_ADD_NEW_SCHEDULE,
			schedule: schedule
		})
	}
}