// Firebase
import { collection } from "firebase/firestore";
import { db } from "../";

// User Collection Reference
export const userCollectionRef = collection(db, "users");
