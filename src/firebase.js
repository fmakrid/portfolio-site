// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8mTDy6prSKGG2FdmiUlGE0CL2cXYSzbQ",
  authDomain: "filippos-makridis.firebaseapp.com",
  projectId: "filippos-makridis",
  storageBucket: "filippos-makridis.appspot.com",
  messagingSenderId: "161063020404",
  appId: "1:161063020404:web:1ac497f6c75ff0055fae21",
  measurementId: "G-REGHDY6C5P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, 'first_visit');