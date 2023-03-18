// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFOpb_g-V7zDq5P9O80rgKgPzZKkpm1zs",
  authDomain: "chatappreact-firebase.firebaseapp.com",
  projectId: "chatappreact-firebase",
  storageBucket: "chatappreact-firebase.appspot.com",
  messagingSenderId: "1000678728923",
  appId: "1:1000678728923:web:ce08a60ed48df84f9698fe",
  measurementId: "G-3TZW2T0360"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);