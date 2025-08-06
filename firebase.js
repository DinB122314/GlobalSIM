// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendEmailVerification
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB9xPfQDbAJjPS_6H081FEjSyEQUE80IkY",
  authDomain: "globalsim-54868.firebaseapp.com",
  projectId: "globalsim-54868",
  storageBucket: "globalsim-54868.firebasestorage.app",
  messagingSenderId: "128597882511",
  appId: "1:128597882511:web:e192fa863f3d7976b5a2fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Keep users logged in even after refreshing
setPersistence(auth, browserLocalPersistence);

// Export functions for use in other files
export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendEmailVerification
};
