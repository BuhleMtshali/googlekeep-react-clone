# Keep-React Notes App

This is a simple **React-based notes app** that allows users to create, store, and delete notes. The app uses **Firebase Realtime Database** for persistent storage and **Styled Components** for UI styling.

---
## 🚀 Features
- Add notes with a **title** and **text**
- Store notes in **Firebase Realtime Database**
- Retrieve stored notes from Firebase on page load
- Delete notes from Firebase and UI
- Auto-expanding textarea for better UX

---
## 🛠 Tech Stack
- **React** - Frontend framework
- **Firebase Realtime Database** - Cloud storage for notes
- **Styled Components** - Styling
- **GSAP & Three.js** (Optional) - For animations (if needed)

---
## 📌 Setup & Installation

### 1️⃣ Clone the repository
```sh
 git clone https://github.com/BuhleMtshali/keep-react-notes-app.git
 cd keep-react-notes-app
```

### 2️⃣ Install dependencies
```sh
 npm install
```

### 3️⃣ Set up Firebase
1. Go to [Firebase Console](https://console.firebase.google.com/) and create a project.
2. Enable **Realtime Database** and set the rules to:
   ```json
   {
     "rules": {
       ".read": "auth != null",
       ".write": "auth != null"
     }
   }
   ```
3. Copy your Firebase config and replace it in **Firebase.js**.

### 4️⃣ Start the app
```sh
 npm run dev
```

---
## 🔥 Firebase Setup in Code
### `Firebase.js`
```js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };
```

---
## 📝 How to Use
1. Click the text area to **create a new note**.
2. Enter a **title** (optional) and **note content**.
3. Click outside the input to **save**.
4. Notes are stored in **Firebase** and retrieved on refresh.
5. Click the **delete button** on a note to remove it.

---
## ❌ Delete Functionality
### `handleDelete` in `App.js`
```js
const handleDelete = (id) => {
  const noteRef = ref(database, `notes/${id}`);
  remove(noteRef) // Deletes from Firebase
    .then(() => setNotes(notes.filter(note => note.id !== id))) // Updates UI
    .catch(error => console.error("Error deleting note:", error));
};
```

---
## 🎯 Future Enhancements
- User authentication with Firebase Auth
- Search and filter notes
- Dark mode support
- Drag and drop notes

---
## 👤 Author
- **Buhle Mtshali** - [GitHub](https://github.com/BuhleMtshali)

---
## 📜 License
This project is **open-source** and available under the MIT License.

