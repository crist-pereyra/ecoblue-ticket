import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
 // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAN9OkPm7x5j4i5pJhQ-Rrkiijiudg1dZ8",
    authDomain: "ecoblu-ticket.firebaseapp.com",
    projectId: "ecoblu-ticket",
    storageBucket: "ecoblu-ticket.appspot.com",
    messagingSenderId: "176148371388",
    appId: "1:176148371388:web:97b3a2f5cf525294fbbdb9"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

//projectFirestore.settings({timestampSnapshot: true});

export { projectStorage, projectFirestore, timestamp };