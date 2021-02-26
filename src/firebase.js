import firebase from "firebase/app";
import "firebase/database";
const  firebaseConfig = {
    apiKey: "AIzaSyBnQvOvs2nuvdgWhQwIqaf8jdb3v9DVVDw",
    authDomain: "my-pets-crud.firebaseapp.com",
    projectId: "my-pets-crud",
    storageBucket: "my-pets-crud.appspot.com",
    messagingSenderId: "638537649188",
    appId: "1:638537649188:web:e8bc86e0a42a7f059bdcb1"
};
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);