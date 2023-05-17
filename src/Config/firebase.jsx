import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAoCTNz9kBoofhxereJnrjiJf9SY_wMgLo",
    authDomain: "capstone-386319.firebaseapp.com",
    projectId: "capstone-386319",
    storageBucket: "capstone-386319.appspot.com",
    messagingSenderId: "30376567049",
    appId: "1:30376567049:web:c3da15fae89b47893433d8",
    measurementId: "G-G6D0PDKDNB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);
