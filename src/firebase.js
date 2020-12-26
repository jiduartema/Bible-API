import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAC0z602TkQs3gOSYQCn4iIrhFQUrlFNZk",
    authDomain: "bible-api-15837.firebaseapp.com",
    projectId: "bible-api-15837",
    storageBucket: "bible-api-15837.appspot.com",
    messagingSenderId: "637613363065",
    appId: "1:637613363065:web:94018928deffb0935a29a8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore()