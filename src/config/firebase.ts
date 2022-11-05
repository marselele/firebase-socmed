// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvrccO_8FEY7h6zmAV-X4z_nV2aV6-iC0",
  authDomain: "socmed-firebase.firebaseapp.com",
  projectId: "socmed-firebase",
  storageBucket: "socmed-firebase.appspot.com",
  messagingSenderId: "595996677128",
  appId: "1:595996677128:web:9560d39448bd90e1ad2dbd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
