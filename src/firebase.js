import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAO1SQlRQjXahMNI02yv2h0YaXLJAHPObk",
    authDomain: "biolog-ce0c8.firebaseapp.com",
    databaseURL: "https://biolog-ce0c8.firebaseio.com",
    projectId: "biolog-ce0c8",
    storageBucket: "biolog-ce0c8.appspot.com",
    messagingSenderId: "912882112237",
    appId: "1:912882112237:web:8a5af8298ccbbecaa4dee4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;