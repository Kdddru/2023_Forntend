import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRESTORE_API_KEY,
  authDomain: "assign-3af08.firebaseapp.com",
  projectId: "assign-3af08",
  storageBucket: "assign-3af08.appspot.com",
  messagingSenderId: "521240167903",
  appId: "1:521240167903:web:84fec937ce2ff7bbe7b06a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);