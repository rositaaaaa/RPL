// firebaseConfig.js
// Modul untuk inisialisasi koneksi Firebase Firestore.
// NOTE: Isi nilai config dibawah sesuai project Firebase-mu.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBfsUL54g4uVbB6xM-a-q0ZuGJERygFWLk",
  authDomain: "input-nilai-mhs-fdbee.firebaseapp.com",
  projectId: "input-nilai-mhs-fdbee",
  storageBucket: "input-nilai-mhs-fdbee.firebasestorage.app",
  messagingSenderId: "966059689163",
  appId: "1:966059689163:web:e434051f1f3ff4819f474e",
  measurementId: "G-8G6HL80CFW"
};

// Inisialisasi Firebase App & Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export db agar dipakai module lain
export { db };