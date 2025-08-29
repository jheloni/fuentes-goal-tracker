
import { initializeApp } from "firebase/app";
import { getFirestore }  from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD85JHeKF7186riUCriGF2kIpdJ7vbgZZk",
  authDomain: "goalproject-jcf.firebaseapp.com",
  projectId: "goalproject-jcf",
  storageBucket: "goalproject-jcf.firebasestorage.app",
  messagingSenderId: "167220005093",
  appId: "1:167220005093:web:5dd7db8fd22603fe63ec0c"
};

const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)