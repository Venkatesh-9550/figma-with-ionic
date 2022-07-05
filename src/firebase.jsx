// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXFyC8h9dfkq_rD83iJGLtStW1Hq9dQWs",
  authDomain: "figma-with-ionic.firebaseapp.com",
  projectId: "figma-with-ionic",
  storageBucket: "figma-with-ionic.appspot.com",
  messagingSenderId: "311404152979",
  appId: "1:311404152979:web:e8ea6913250a79e06ce566"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;