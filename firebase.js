
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA_tU9ebv9diND54L3we1ic81N3rq-Vv7I",
  authDomain: "login-84507.firebaseapp.com",
  projectId: "login-84507",
  storageBucket: "login-84507.appspot.com",
  messagingSenderId: "506081519614",
  appId: "1:506081519614:web:f918bbd4811a55435b42af",
  measurementId: "G-ZQ0NC5YNZ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);