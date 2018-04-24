import * as firebase from "firebase";
import { PUSH_SENDER_ID } from '../constants';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyATwrp7j9nrcCh-1apYb7annEWWvQvIHZo",
  authDomain: "pokemon-pwa.firebaseapp.com",
  databaseURL: "https://pokemon-pwa.firebaseio.com",
  projectId: "pokemon-pwa",
  storageBucket: "",
  messagingSenderId: PUSH_SENDER_ID,
};
firebase.initializeApp(config);

const database = firebase.database();
const trainerRef = database.ref('trainer');

export { trainerRef, database };
