const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  console.log("Form submitted:", { name, email, role });

  try {
    // 1️⃣ Create user in Firebase Auth
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;
    console.log("User created in Auth:", user.uid);

    // 2️⃣ Add user to Firestore
    await db.collection("users").doc(user.uid).set({
      name,
      email,
      role,
      createdAt: new Date().toISOString()
    });
    console.log("User saved in Firestore:", user.uid);

    alert("Signup successful!");
    signupForm.reset();
  } catch (error) {
    console.error("Signup error:", error);
    alert("Error: " + error.message);
  }
});
