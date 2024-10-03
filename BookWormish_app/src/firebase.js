// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1Y_q9bGKkCiPMbEMiScS4sVfDCIsS-8Q",
  authDomain: "bookwormish-app.firebaseapp.com",
  projectId: "bookwormish-app",
  storageBucket: "bookwormish-app.appspot.com",
  messagingSenderId: "345315701808",
  appId: "1:345315701808:web:1886db506bc161ee03e9f5",
  measurementId: "G-KG7LYYN0QD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);