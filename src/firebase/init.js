// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
/* import { getAnalytics } from "firebase/analytics"; */
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJJHzErOcL0zRIHfPrA4Ld4Ro4jF9d5vY",
  authDomain: "registrar-e9a88.firebaseapp.com",
  projectId: "registrar-e9a88",
  storageBucket: "registrar-e9a88.appspot.com",
  messagingSenderId: "341749185073",
  appId: "1:341749185073:web:e3bb324ddee9ac6ddaf310",
  measurementId: "G-00K8942P4S"
};

// Initialize Firebase
initializeApp(firebaseConfig);
/* const analytics = getAnalytics(app);
 */
const db = getFirestore()
export default db;
export const auth = getAuth();