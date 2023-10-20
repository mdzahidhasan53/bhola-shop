// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwas9btj1W-ZXPSva1s2QsszIP6wEYepc",
  authDomain: "bhola-shop.firebaseapp.com",
  projectId: "bhola-shop",
  storageBucket: "bhola-shop.appspot.com",
  messagingSenderId: "1078358035455",
  appId: "1:1078358035455:web:2216dbba2795c9665735ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;