// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore, collection, doc, setDoc, getDocs, deleteDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

// TODO: Replace the config below with your Firebase project's config object
// You can find this in your Firebase Console -> Project Settings -> General -> Your apps (Web app)
const firebaseConfig = {
  apiKey: "AIzaSyDs4IWZdxrihnN_aRDTRFp7b22PQMu_S4Q",
  authDomain: "codexsigninmanager.firebaseapp.com",
  projectId: "codexsigninmanager",
  storageBucket: "codexsigninmanager.firebasestorage.app",
  messagingSenderId: "259006393679",
  appId: "1:259006393679:web:0145fe8b982119fbe7e93a",
  measurementId: "G-W3VV0Q64VJ"
};

// Initialize Firebase only if the config has been updated (not using placeholders)
let app, auth, db, provider;

if (firebaseConfig.apiKey !== "YOUR_API_KEY") {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  provider = new GoogleAuthProvider();
} else {
  console.warn("Firebase config is not set. Please update firebase-config.js with your credentials.");
}

export { auth, db, provider, signInWithPopup, signOut, onAuthStateChanged, collection, doc, setDoc, getDocs, deleteDoc, onSnapshot, firebaseConfig };
