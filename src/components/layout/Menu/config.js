// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC25C60K6R_xflQUk6PZ2xou8dUoAAEU5s",
  authDomain: "gknode-66dad.firebaseapp.com",
  projectId: "gknode-66dad",
  storageBucket: "gknode-66dad.appspot.com",
  messagingSenderId: "827535025300",
  appId: "1:827535025300:web:3b08d19a0170ddbb148081",
  measurementId: "G-1TT29Q8YSL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export{auth,provider};