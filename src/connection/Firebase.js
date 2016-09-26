import firebase from "firebase";
import UserController from './../controllers/UserController';

export default class Firebase {
	static init(){
		Firebase.instance = firebase.initializeApp({
			apiKey: "AIzaSyDQpQMCtbMlR8fj74XMslxSKQp25ZlDBeI",
			authDomain: "reserver-driver.firebaseapp.com",
			databaseURL: "https://reserver-driver.firebaseio.com",
			storageBucket: "reserver-driver.appspot.com",
			messagingSenderId: "48751074974"
		});
		Firebase.database = Firebase.instance.database();
		Firebase.storage = Firebase.instance.storage();
		Firebase.auth = Firebase.instance.auth();
	}

	static authenticate(email, password, authCb){
		Firebase.auth.signInWithEmailAndPassword(email, password)
			.then((data)=>{
				if(authCb){
					authCb(data);
				}
			})
			.catch((error)=>{
				throw error
			})
	}

	static createUser(user){
		Firebase.auth
			.createUserWithEmailAndPassword(user.email, user.password)
			.then((result)=> {
				var uid = result.uid;
				var userRef = Firebase.database.ref('users').child(uid);
				userRef.on('value',(data)=>{
					var newUser = data.val();
					Firebase.authenticate(user.email, user.password, (data)=>{
						UserController.userCreate(newUser)
					});
				});
				userRef.update({
					uid: uid,
					createAt: firebase.database.ServerValue.TIMESTAMP,
					name:user.name,
					email: user.email,
					phone: user.phone,
					defaultAddress: user.defaultAddress,
					category: user.category,
					photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/AWS_Simple_Icons_Non-Service_Specific_User.svg/2000px-AWS_Simple_Icons_Non-Service_Specific_User.svg.png'
				});
			})
			.catch((error)=> {
				console.log('error', error);
			});
	}

	static findUserByUid(uid) {
		var userRef = Firebase.database.ref('users').child(uid);
		userRef.on('value',(data)=>{
			var user = data.val();
			UserController.userChange(user);
		});
	}

	static getUserSchedules(uid, userSchedulesCb) {
		var scherduleRef = Firebase.database.ref('schedule');
		scherduleRef.on('value',(data)=>{
			var schedules = [];
			var tmpSchedules = data.val();
			for(var s in tmpSchedules){
				var schedule =  tmpSchedules[s];
				if(schedule.clientUid == uid){
					schedules.push(schedule)
				}
			}
			userSchedulesCb(schedules)
		})
	}
}

/*
 {
 apiKey: "AIzaSyDQpQMCtbMlR8fj74XMslxSKQp25ZlDBeI",
 authDomain: "reserver-driver.firebaseapp.com",
 databaseURL: "https://reserver-driver.firebaseio.com",
 storageBucket: "reserver-driver.appspot.com",
 messagingSenderId: "48751074974"
 }
 */