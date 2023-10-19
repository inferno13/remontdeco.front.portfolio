import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
	apiKey: "AIzaSyBwqFqYlbBcB1dWc0bWgNwFkQcM8GB-jVw",
	authDomain: "remontdeco-21a8d.firebaseapp.com",
	databaseURL: "https://remontdeco-21a8d-default-rtdb.firebaseio.com",
	projectId: "remontdeco-21a8d",
	storageBucket: "remontdeco-21a8d.appspot.com",
	messagingSenderId: "732410847535",
	appId: "1:732410847535:web:8be0b4340d6183a41001da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const realtimeDB = getDatabase(app);
export const storageDB = getStorage(app);
