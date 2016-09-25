import EventEmiter from 'events';
import dispatcher from './../dispatcher/Dispatcher';
import UserController,{
	ACTION_REQUEST_USER_ADD,
	ACTION_REQUEST_USER_CHANGE,
	ACTION_REQUEST_USER_CREATE,
	ACTION_REQUEST_USER_AUTH,
	ACTION_REQUEST_USER_AUTH_BY_EP

} from './../controllers/UserController';
import firebase from './../connection/Firebase';
export const EVENT_USER_CHANGE = 'EVENT_USER_CHANGE';
export const EVENT_USER_CREATE = 'EVENT_USER_CREATE';
class UserStore extends EventEmiter{
	constructor(){
		super();
		this.user = null;
	}
	getCurrentUser(){
		return this.user;
	}
	setCurrentUser(user){
		this.user = user;
	}
}
var userStore = new UserStore();

dispatcher.register((payload)=>{
	switch (payload.action){
		case ACTION_REQUEST_USER_ADD:
			firebase.createUser(payload.user);
			break;
		case ACTION_REQUEST_USER_CREATE:
			userStore.setCurrentUser(payload.user);
			userStore.emit(EVENT_USER_CREATE, userStore.getCurrentUser());
			break;
		case ACTION_REQUEST_USER_CHANGE:
			userStore.setCurrentUser(payload.user);
			userStore.emit(EVENT_USER_CHANGE, userStore.getCurrentUser());
			break;
		case ACTION_REQUEST_USER_AUTH:
			firebase.findUserByUid(payload.uid);
			break;
		case ACTION_REQUEST_USER_AUTH_BY_EP:
			firebase.authenticate(payload.user.email, payload.user.password, (response)=>{
				var uid = response.uid;
				firebase.findUserByUid(uid)
			});
			break;
	}
});
export default userStore ;
