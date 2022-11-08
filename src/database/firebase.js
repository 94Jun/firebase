// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNvifKjvtojbsJLrRylkWo-xPdGhJ1M74",
  authDomain: "fir-login-34d0b.firebaseapp.com",
  projectId: "fir-login-34d0b",
  storageBucket: "fir-login-34d0b.appspot.com",
  messagingSenderId: "814676272085",
  appId: "1:814676272085:web:e07a2b956a6ba62488d35c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
