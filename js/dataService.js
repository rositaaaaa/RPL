// js/dataService.js
import { db } from "./firebaseConfig.js";
import {
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const colRef = collection(db, "mahasiswa");

async function addData(mahasiswa) {
  await addDoc(colRef, mahasiswa);
}

async function getAllData() {
  const snapshot = await getDocs(colRef);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export { addData, getAllData };
