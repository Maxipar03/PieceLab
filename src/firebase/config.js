
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCtOMnNMmlSghUfXDzTwccEvWMN6nnKBMw",
    authDomain: "pice-lab.firebaseapp.com",
    projectId: "pice-lab",
    storageBucket: "pice-lab.firebasestorage.app",
    messagingSenderId: "520695136960",
    appId: "1:520695136960:web:542824cb6f326cbe98a325"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)