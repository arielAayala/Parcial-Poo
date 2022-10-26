// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCafwCmhkDjtYU4C3U5D3slG14qaUjJUJQ",
  authDomain: "parcial-poo-d2f89.firebaseapp.com",
  projectId: "parcial-poo-d2f89",
  storageBucket: "parcial-poo-d2f89.appspot.com",
  messagingSenderId: "983088918080",
  appId: "1:983088918080:web:87683baa58fb536508b9a5",
  measurementId: "G-WCKRQ1XQX3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db