import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
	apiKey: 'AIzaSyBPClJGdx4Wez7cdc3OPYWfjoF0s88Bsbk',
	authDomain: 'firegram-195e7.firebaseapp.com',
	projectId: 'firegram-195e7',
	storageBucket: 'firegram-195e7.appspot.com',
	messagingSenderId: '921189026215',
	appId: '1:921189026215:web:901dfb8663fb8e8bdb4e82'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
