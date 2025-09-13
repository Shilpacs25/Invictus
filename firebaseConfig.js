// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6LOG_AnWQabbT1hB3tt0seqIcji4_11g",
  authDomain: "invictus-1e456.firebaseapp.com",
  projectId: "invictus-1e456",
  storageBucket: "invictus-1e456.appspot.com",
  messagingSenderId: "574994763158",
  appId: "1:574994763158:web:fce7848d138e793556e1b7",
  measurementId: "G-Y38FCW0HGK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
