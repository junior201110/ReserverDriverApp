import firebase from 'firebase';

export default class Firebase {
	static init(){
		Firebase.instance = firebase.initializeApp({
			apiKey: "AIzaSyDQpQMCtbMlR8fj74XMslxSKQp25ZlDBeI",
			authDomain: "reserver-driver.firebaseapp.com",
			databaseURL: "https://reserver-driver.firebaseio.com",
			storageBucket: "reserver-driver.appspot.com",
			messagingSenderId: "48751074974"
		});
		Firebase.database = this.instance.database();
		Firebase.storage = this.instance.storage();
		Firebase.auth = this.instance.auth();
	}
	static authenticate(email, password){

	}

	createUser(user){
		Firebase.auth()
			.createUserWithEmailAndPassword(user.email, user.password)
			.then((result)=> {
				var uid = result.uid;
				Firebase.database()
					.ref('users')
					.set({
						name:user.name,
						email: user.email,
						fone: user.fone,
						address: user.address,
						type: user.type
				})
			})
			.catch((error)=> {
				console.log('error', error);
		});
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