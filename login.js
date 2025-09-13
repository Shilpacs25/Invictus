const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    const user = userCredential.user;

    const doc = await db.collection("users").doc(user.uid).get();
    if (doc.exists) {
      const role = doc.data().role;
      console.log("User role:", role);

      if (role === "admin") {
        window.location.href = "admin.html";
      } else if (role === "school") {
        window.location.href = "school.html";
      } else if (role === "teacher") {
        window.location.href = "teacher.html";
      } else if (role === "student") {
        window.location.href = "student.html";
      } else if (role === "auditor") {
        window.location.href = "auditor.html";
      } else {
        alert("Unknown role!");
      }

    } else {
      alert("User data not found.");
    }
  } catch (error) {
    console.error("Login error:", error);
    alert("Error: " + error.message);
  }
});
