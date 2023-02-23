// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDlGca1bF_e_JnPXj0A3T3IdV-XYOzWvrI",
    authDomain: "swrv-test.firebaseapp.com",
    projectId: "swrv-test",
    storageBucket: "swrv-test.appspot.com",
    messagingSenderId: "830192405531",
    appId: "1:830192405531:web:988f62911c3fe1e8387cbe",
    measurementId: "G-59JHF0DRXZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };