import firebase from 'firebase';

export default class Firebase {

	constructor() {
		this.instance = firebase.initializeApp('https://reserver-driver.firebaseio.com');
		this.database = this.instance.database();
		this.storage = this.instance.storage();
		this.auth = this.instance.auth()
	}
	addNewClient(clientId, name, pass){
		// this.database.set({
		// 	users:{
		// 		junior:{
		// 			name: 'Washingon Junior',
		// 			pass: '123'
		// 		}
		// 	}
		// })
		console.log(this);

	}
	writeNewPost(uid, username, picture, title, body) {
		// A post entry.
		var postData = {
			author: username,
			uid: uid,
			body: body,
			title: title,
			starCount: 0,
			authorPic: picture
		};

		// Get a key for a new Post.
		var newPostKey = firebase.database().ref().child('posts').push().key;

		// Write the new post's data simultaneously in the posts list and the user's post list.
		var updates = {};
		updates['/posts/' + newPostKey] = postData;
		updates['/user-posts/' + uid + '/' + newPostKey] = postData;

		return firebase.database().ref().update(updates);
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