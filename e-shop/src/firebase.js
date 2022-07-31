import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNGpA8sskQ3iQ7DuC1IrYpsfaUUJlItcw",
    authDomain: "e-shop-be5db.firebaseapp.com",
    projectId: "e-shop-be5db",
    storageBucket: "e-shop-be5db.appspot.com",
    messagingSenderId: "228190283374",
    appId: "1:228190283374:web:80e5a245a6f8ec1768e87f",
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const firestore = firebase.firestore();
export default firestore;
