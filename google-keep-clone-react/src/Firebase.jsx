
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyByrqWcoxivImTjK6NArE2VvLOfm5U30S8",
  authDomain: "keep-react-25fc8.firebaseapp.com",
  projectId: "keep-react-25fc8",
  storageBucket: "keep-react-25fc8.firebasestorage.app",
  messagingSenderId: "1054383634217",
  appId: "1:1054383634217:web:99cd2c53f6909bb67aa938",
  measurementId: "G-DHKT575VM0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default { app, analytics };