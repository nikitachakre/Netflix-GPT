// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4EZQg67Wa0CGnYzJI1gMB41hSgneaOJ8",
  authDomain: "netflixgpt-5dfad.firebaseapp.com",
  projectId: "netflixgpt-5dfad",
  storageBucket: "netflixgpt-5dfad.firebasestorage.app",
  messagingSenderId: "995287042048",
  appId: "1:995287042048:web:8b8f7f64b529b2b21530e5",
  measurementId: "G-0TVVP37BG2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();