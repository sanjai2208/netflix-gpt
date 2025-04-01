// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKj5kdXjJqjoZhBpberrzpG0bDedDWLcM",
  authDomain: "netflixgpt-5c555.firebaseapp.com",
  projectId: "netflixgpt-5c555",
  storageBucket: "netflixgpt-5c555.firebasestorage.app",
  messagingSenderId: "981539929696",
  appId: "1:981539929696:web:57565041c35575407a0d05",
  measurementId: "G-70R3D1X0E0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();