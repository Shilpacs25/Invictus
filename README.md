# Invictus
# FundTrack  

FundTrack is a web application built with **HTML, CSS, JavaScript, and Firebase**. 
As a first step of creating a generalised tracking system here we have tried to create a sample school fund tracking system. 
It helps manage and track funds by providing **role-based dashboards** for students, teachers, and admins, ensuring that each user has access to the features relevant to them.  

With Firebase Authentication and Firestore integration, FundTrack ensures **secure login, real-time data storage, and role-specific navigation**, making it a simple yet effective solution for institutional fund management.  

---

## Table of Contents

- [Invictus](#invictus)
- [FundTrack](#fundtrack)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Project Structure](#project-structure)
  - [Setup \& Installation](#setup--installation)
  - [Usage](#usage)
  - [Technologies Used](#technologies-used)
  - [Future Improvements](#future-improvements)

---

## Features  

- **User Authentication** – Secure signup/login using Firebase Auth  
- **Role-based Access** – Separate views and dashboards for students, teachers, and admins  
- **Fund Tracking** – Store and manage fund-related records in Firebase Firestore  
- **Dedicated Dashboards** – Individual HTML/CSS files for each user type  
- **Main Dashboard** – Unified entry point (`main.html`) after login for navigation  
- **Scalable Design** – Easily extendable to add new roles, features, or analytics  
 

---

## Project Structure
FundTrack/
├── main.html              # Landing page

├── index.html             # Main dashboard 

├── signup.html            # User signup page

├── login.html             # User login page

│

├── student.html           # Student dashboard

├── student.css            # Student-specific styles

│

├── teacher.html           # Teacher dashboard

├── teacher.css            # Teacher-specific styles

│

├── admin.html             # Admin dashboard

├── admin.css              # Admin-specific styles

│

├── style.css              # Global styles

│

├── firebaseConfig.js      # Firebase project configuration

├── firestore.js           # Firestore database helper functions

├── login.js               # Login functionality

├── signup.js              # Signup functionality

├── testFirebase.js        # Firebase connection test script

│

├── package.json           # Node dependencies (if any)

├── package-lock.json

└── assets/                # (Optional)     images, icons, or other static resources


## Setup & Installation  

1. **Clone the repository**  
   ```bash
   git clone https://github.com/Shilpacs25/Invictus.git
   cd Invictus

2. **Install dependencies** (if using Node packages)  
  Run the following command to install required dependencies:
  
    ```bash
    npm install

3. **Firebase Setup**

   - Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
   - In **Authentication → Sign-in method**, enable **Email/Password**.
   - In **Firestore Database**, create a database (start in test mode while developing).
   - In **Project settings → Your apps**, register a web app and copy the Firebase config.
   - Create a file named `firebaseConfig.js` in your project root and paste the config there. Example:
   ```js
   // firebaseConfig.js
   // Replace the placeholder strings with your actual Firebase project values
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT_ID.appspot.com",
     messagingSenderId: "YOUR_SENDER_ID",
     appId: "YOUR_APP_ID"
   };

   // Export (for ES modules)
   export default firebaseConfig;


- Initialize Firebase in your app (example):

    ```js
    // initFirebase.js
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.x.x/firebase-app.js";
    import firebaseConfig from "./firebaseConfig.js";

    const app = initializeApp(firebaseConfig);  

4. **Run locally**

- Option A — Open directly
  - Open `index.html` in your browser (double-click or use “Open File”).
  - ⚠️ Note: Some Firebase APIs/modules require serving over HTTP(S). If you encounter CORS or module errors, use a local server.

- Option B — Start a simple local server (recommended)
  - Using Node (`http-server`):
    ```bash
    npx http-server .
    ```
  - Then open in your browser:
    - `http://localhost:8080` (Node default)
    - `http://localhost:8000` (Python example)
  
---

## Usage

- Visit `main.html` as the entry point 
- Check the sample working system `index.html` 
- Signup with a new account (`signup.html`)  
- Login via `login.html`  
- Use Firestore database for storing and retrieving fund-related data  

---

## Technologies Used

- **Frontend** – HTML5, CSS3, JavaScript  
- **Backend (as-a-service)** – Firebase  
  - Authentication  
  - Firestore Database  

---

## Future Improvements

- Enhance UI/UX with better design and responsive layouts  
- Add password reset & email verification 
- Detailed fund reports and analytics dashboards  
- Notification system (e.g., approval requests, fund updates)  
- Support for file uploads or receipts management  
- Creating a generalized tracking system based on this sample
