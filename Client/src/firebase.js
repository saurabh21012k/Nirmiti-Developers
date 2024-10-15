// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "nirmiti-developers.firebaseapp.com",
  projectId: "nirmiti-developers",
  storageBucket: "nirmiti-developers.appspot.com",
  messagingSenderId: "670538990891",
  appId: "1:670538990891:web:f1310d5b847f8d36e5f16e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);