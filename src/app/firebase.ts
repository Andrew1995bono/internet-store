// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATxGIbf9_Na0qzXNefztLPULlS85vKxPY",
  authDomain: "freshnesecom-app.firebaseapp.com",
  projectId: "freshnesecom-app",
  storageBucket: "freshnesecom-app.appspot.com",
  messagingSenderId: "34681539114",
  appId: "1:34681539114:web:74bcb1c6a6c0a41efe9153",
  measurementId: "G-93XCFN2GSH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

