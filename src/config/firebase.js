// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseKey = import.meta.env.VITE_FIREBASE_API_KEY;
const firebaseConfig = {
  apiKey: firebaseKey,
  authDomain: "member-lists-47448.firebaseapp.com",
  projectId: "member-lists-47448",
  storageBucket: "member-lists-47448.appspot.com",
  messagingSenderId: "161199068488",
  appId: "1:161199068488:web:6014707e780620dba70f7d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
