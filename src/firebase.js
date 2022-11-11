import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC8mTDy6prSKGG2FdmiUlGE0CL2cXYSzbQ",
  authDomain: "filippos-makridis.firebaseapp.com",
  projectId: "filippos-makridis",
  storageBucket: "filippos-makridis.appspot.com",
  messagingSenderId: "161063020404",
  appId: "1:161063020404:web:1ac497f6c75ff0055fae21",
  measurementId: "G-REGHDY6C5P"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, 'first_visit');