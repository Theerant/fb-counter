import firebase from 'firebase'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyDdag4sEV92qhQdW9MqtaM-MHdX2-3dSIw",
    authDomain: "fb-counter-c8af3.firebaseapp.com",
    databaseURL: "https://fb-counter-c8af3.firebaseio.com",
    projectId: "fb-counter-c8af3",
    storageBucket: "fb-counter-c8af3.appspot.com",
    messagingSenderId: "967558353354"
};

firebase.initializeApp(config);
const db = firebase.firestore();
export default db;