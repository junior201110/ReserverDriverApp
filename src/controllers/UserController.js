import dispatcher from './../dispatcher/Dispatcher';

export const ACTION_REQUEST_USER_ADD = 'ACTION_REQUEST_USER_ADD';
export const ACTION_REQUEST_USER_CHANGE = 'ACTION_REQUEST_USER_CHANGE';
export const ACTION_REQUEST_USER_CREATE = 'ACTION_REQUEST_USER_CREATE';
export const ACTION_REQUEST_USER_AUTH = 'ACTION_REQUEST_USER_AUTH';
export const ACTION_REQUEST_USER_AUTH_BY_EP = 'ACTION_REQUEST_USER_AUTH_BY_EP';

export default class UserController {
	static requestAdd(user){
		dispatcher.dispatch({
			action: ACTION_REQUEST_USER_ADD,
			user: user
		})
	}
	static userChange(user){
		dispatcher.dispatch({
			action: ACTION_REQUEST_USER_CHANGE,
			user: user
		})
	}
	static userCreate(user){
		dispatcher.dispatch({
			action: ACTION_REQUEST_USER_CREATE,
			user: user
		})
	}
	static authenticateByUserAndPass(user){
		dispatcher.dispatch({
			action: ACTION_REQUEST_USER_AUTH_BY_EP,
			user: user
		})
	}
	static  requestAuthenticate(_uid) {
		dispatcher.dispatch({
			action: ACTION_REQUEST_USER_AUTH,
			uid: _uid
		})
	}
}
