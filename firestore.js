import { db } from "./firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";

// Add fund
export const addFund = async (fund) => {
  await addDoc(collection(db, "funds"), fund);
};

// Add expense
export const addExpense = async (expense) => {
  await addDoc(collection(db, "expenses"), expense);
};

// Add feedback
export const addFeedback = async (feedback) => {
  await addDoc(collection(db, "feedback"), feedback);
};
