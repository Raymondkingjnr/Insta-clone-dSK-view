import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAU9UowGKfGRrZBeyzdK-LPlrCfDw9NeOk",
  authDomain: "auth-dev-12a5d.firebaseapp.com",
  projectId: "auth-dev-12a5d",
  storageBucket: "auth-dev-12a5d.appspot.com",
  messagingSenderId: "358011231369",
  appId: "1:358011231369:web:c5d8eaaf0b6ac77d4efa58",
};

initializeApp(firebaseConfig);
export const auth = getAuth();
