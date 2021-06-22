import firebase from "firebase";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyCTyfyTRlRMfhzCkX6ImIpdPdSG9gGvx90",
    authDomain: "chat-app-capstone.firebaseapp.com",
    projectId: "chat-app-capstone",
    storageBucket: "chat-app-capstone.appspot.com",
    messagingSenderId: "582268529528",
    appId: "1:582268529528:web:cd46a68dfb5e8400a8b68d"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;