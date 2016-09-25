import dispatcher from './../dispatcher/Dispatcher';

export const ACTION_REQUEST_LOGIN = 'ACTION_REQUEST_LOGIN';

export default class LoginController{

	static requestLogin(user){
		dispatcher.dispatch({
			action: ACTION_REQUEST_LOGIN,
			user: user
		})
	}
}