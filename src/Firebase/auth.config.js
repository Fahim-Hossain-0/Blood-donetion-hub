// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoqUvDyp2TLbtZ6hMZAhcII1axH6CKIY8",
  authDomain: "blood-donation-bcbd2.firebaseapp.com",
  projectId: "blood-donation-bcbd2",
  storageBucket: "blood-donation-bcbd2.firebasestorage.app",
  messagingSenderId: "1016199505324",
  appId: "1:1016199505324:web:abb3db90196ef7eef5c609"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)