// Firebase
import { collection } from "firebase/firestore";
import { db } from "..";

// User Collection Reference
export const userCollectionRef = collection(db, "users");

// Document Collection Reference
export const documentCollectionRef = collection(db, "documents");

// Ui Collection Reference
export const uiCollectionRef = collection(db, "ui");
