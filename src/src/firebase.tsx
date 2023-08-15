// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnxvYTn8Bv7Wq9siLlCSaQKkD_KT2Sd4E",
  authDomain: "fir-auth-demo-20bab.firebaseapp.com",
  projectId: "fir-auth-demo-20bab",
  storageBucket: "fir-auth-demo-20bab.appspot.com",
  messagingSenderId: "45341495580",
  appId: "1:45341495580:web:9a6ba92af33ebb77552ad9",
  measurementId: "G-PP43GNG76S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
