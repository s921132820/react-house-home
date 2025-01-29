// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNHJYbyDxktac-bF75SjU8t4L3kK6k2zQ",
    authDomain: "house-d1571.firebaseapp.com",
    projectId: "house-d1571",
    storageBucket: "house-d1571.firebasestorage.app",
    messagingSenderId: "310371406602",
    appId: "1:310371406602:web:7c2c7227f9197596fe20f3"
  };

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Firebase 서비스 초기화
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;