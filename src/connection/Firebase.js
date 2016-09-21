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
	static atuhenticate(email, password){

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