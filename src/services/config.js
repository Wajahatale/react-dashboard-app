// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApk4TD_XnK2tPSYBJhg2NggykDZHIiT1I",
  authDomain: "react-dashboard-app-54290.firebaseapp.com",
  projectId: "react-dashboard-app-54290",
  storageBucket: "react-dashboard-app-54290.appspot.com",
  messagingSenderId: "922459824411",
  appId: "1:922459824411:web:34b21a13320578b5b8b3be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
