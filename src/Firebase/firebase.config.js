// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlQZ08PtsJXeoChyubOI6SvVOy7Ukeb-s",
  authDomain: "real-state-residential.firebaseapp.com",
  projectId: "real-state-residential",
  storageBucket: "real-state-residential.appspot.com",
  messagingSenderId: "53040230035",
  appId: "1:53040230035:web:d3ae6380eca769e856a766"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;