// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPve4T7gVP1lBEL6c7elfh4m8MNZ6QmCM",
  authDomain: "assingemt-09.firebaseapp.com",
  projectId: "assingemt-09",
  storageBucket: "assingemt-09.firebasestorage.app",
  messagingSenderId: "104722248277",
  appId: "1:104722248277:web:1ac5a61771d63cc2319adc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;