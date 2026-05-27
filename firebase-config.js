// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore, collection, doc, setDoc, getDocs, deleteDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

// Read config from firebase-env.js (loaded via <script> tag before this module)
const firebaseConfig = window.FIREBASE_CONFIG || {};

// Initialize Firebase only if the config has been provided
let app, auth, db, provider;

if (firebaseConfig.apiKey && firebaseConfig.apiKey !== "YOUR_API_KEY") {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  provider = new GoogleAuthProvider();
} else {
  console.warn("Firebase config is not set. Please copy firebase-env.example.js to firebase-env.js and add your credentials.");
}

export { auth, db, provider, signInWithPopup, signOut, onAuthStateChanged, collection, doc, setDoc, getDocs, deleteDoc, onSnapshot, firebaseConfig };
