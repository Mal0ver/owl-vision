import firebase from "firebase"
import "firebase/auth"
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAHMFovcezNeXuQ9sOgx26zz5_HJyYlDFs",
    authDomain: "owl-vision-4bacc.firebaseapp.com",
    projectId: "owl-vision-4bacc",
    storageBucket: "owl-vision-4bacc.appspot.com",
    messagingSenderId: "741118238084",
    appId: "1:741118238084:web:3842dd76b80d2c81fdd1d1",
    measurementId: "G-1FW5EW177L"
};

export const fire = firebase;
export const provider = new firebase.auth.GoogleAuthProvider();
firebase.initializeApp(firebaseConfig);