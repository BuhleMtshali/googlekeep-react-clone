// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyByrqWcoxivImTjK6NArE2VvLOfm5U30S8",
  authDomain: "keep-react-25fc8.firebaseapp.com",
  projectId: "keep-react-25fc8",
  storageBucket: "keep-react-25fc8.appspot.com",
  messagingSenderId: "1054383634217",
  appId: "1:1054383634217:web:99cd2c53f6909bb67aa938",
  measurementId: "G-DHKT575VM0",
  databaseURL: "https://keep-react-25fc8-default-rtdb.asia-southeast1.firebasedatabase.app/" // ✅ Needed for Realtime DB
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // ✅ Correct way to initialize Realtime Database

export { app, database };
