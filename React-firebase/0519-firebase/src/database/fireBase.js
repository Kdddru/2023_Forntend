// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//인증 
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH,
  projectId: "practice-97d8c",
  storageBucket: "practice-97d8c.appspot.com",
  messagingSenderId: "45155343364",
  appId: "1:45155343364:web:4e67504b96649c813e2951",
  measurementId: "G-BD663QTF09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


//인증 서비스
export const auth =getAuth(app);

