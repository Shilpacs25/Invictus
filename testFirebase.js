import { auth, db } from "./firebaseConfig.js";

console.log("Firebase Auth ready:", auth !== undefined);
console.log("Firestore ready:", db !== undefined);
