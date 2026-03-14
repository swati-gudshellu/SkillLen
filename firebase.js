import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBAQ4pIwlha5qztXMVmQTsoDVyPNC5eKTw",
  authDomain: "skilllen-c968c.firebaseapp.com",
  projectId: "skilllen-c968c",
  storageBucket: "skilllen-c968c.firebasestorage.app",
  messagingSenderId: "724078910752",
  appId: "1:724078910752:web:813583d4140bbb7f7a0b45"
};

const app=initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const db=getFirestore(app);