import * as firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyATwrp7j9nrcCh-1apYb7annEWWvQvIHZo",
  authDomain: "pokemon-pwa.firebaseapp.com",
  databaseURL: "https://pokemon-pwa.firebaseio.com",
  projectId: "pokemon-pwa",
  storageBucket: "",
  messagingSenderId: "330356060993"
};
firebase.initializeApp(config);

const database = firebase.database();
const hunterRef = database.ref('hunter');

export { hunterRef, database };
