// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIeEIuVcna2BZOiz9ImWzcq89R7l3RRSA",
  authDomain: "menfess-x9.firebaseapp.com",
  projectId: "menfess-x9",
  storageBucket: "menfess-x9.firebasestorage.app",
  messagingSenderId: "536941295630",
  appId: "1:536941295630:web:dbdd5241c604b463c1a45f",
  measurementId: "G-NGTPCNDP43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);