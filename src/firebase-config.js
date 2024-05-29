import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPTI8zJ8sFXwwfUZYEdhTXlyqZmo5JMHc",
  authDomain: "image-pro-1b060.firebaseapp.com",
  projectId: "image-pro-1b060",
  storageBucket: "image-pro-1b060.appspot.com",
  messagingSenderId: "966115027351",
  appId: "1:966115027351:web:bcb21f99eabe0bfbbefcd2"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
