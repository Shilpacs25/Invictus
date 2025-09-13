// ===== Signup Form =====
const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  if (!name || !email || !password || !role) {
    alert("Please fill in all fields.");
    return;
  }

  try {
    // 1️⃣ Create user in Firebase Auth
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;
    console.log("User created in Auth:", user.uid);

    // 2️⃣ Save additional user info in Firestore
    await db.collection("users").doc(user.uid).set({
      uid: user.uid,
      name,
      email,
      role,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    console.log("User saved in Firestore:", user.uid);

    alert("Signup successful!");
    signupForm.reset();
  } catch (error) {
    console.error("Signup error:", error);

    // Detailed error messages for debugging
    if (error.code === "auth/email-already-in-use") {
      alert("This email is already registered.");
    } else if (error.code === "auth/weak-password") {
      alert("Password should be at least 6 characters.");
    } else {
      alert("Error: " + error.message);
    }
  }
});
