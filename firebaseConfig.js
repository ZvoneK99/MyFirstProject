// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtd0uAUa03Ay-4dNiuGzh_PuFw1ueNUXY",
  authDomain: "myfirstapp-af726.firebaseapp.com",
  projectId: "myfirstapp-af726",
  storageBucket: "myfirstapp-af726.appspot.com",
  messagingSenderId: "854819254705",
  appId: "1:854819254705:web:a757711d1f3c84c4828d90",
  measurementId: "G-4QCRN2JKYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);