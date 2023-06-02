// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyKGBAy9JTC9Mcp25suvMwo6i5ZKeQj1c",
  authDomain: "coworkrhconsultora.firebaseapp.com",
  projectId: "coworkrhconsultora",
  storageBucket: "coworkrhconsultora.appspot.com",
  messagingSenderId: "806602307298",
  appId: "1:806602307298:web:8904f200672b94dcff50bb",
  measurementId: "G-D8JBTNB4YV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);