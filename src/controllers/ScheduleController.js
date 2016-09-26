import dispatcher from './../dispatcher/Dispatcher';
export const ACTION_REQUEST_USER_SCHEDULE_LIST = 'ACTION_REQUEST_USER_SCHEDULE_LIST';

export default class ScherduleController{
	static getScheduleList(uid){
		console.log(uid, dispatcher);
		dispatcher.dispatch({
			action: ACTION_REQUEST_USER_SCHEDULE_LIST,
			uid: uid
		})
	}
}