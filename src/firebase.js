import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyArW54sPLejp-LF8VZPke5vynI7CcAtykE",
	authDomain: "vouge-salon.firebaseapp.com",
	databaseURL:
		"https://vouge-salon-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "vouge-salon",
	storageBucket: "vouge-salon.appspot.com",
	messagingSenderId: "649104093768",
	appId: "1:649104093768:web:15ba1175334c5a28465e7d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
