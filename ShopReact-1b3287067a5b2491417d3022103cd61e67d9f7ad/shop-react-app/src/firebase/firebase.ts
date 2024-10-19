import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBelxyzWrl1lg1gsl-QYmwa9aukjE8UaGA",
  authDomain: "shop-react-app-f343c.firebaseapp.com",
  projectId: "shop-react-app-f343c",
  storageBucket: "shop-react-app-f343c.appspot.com",
  messagingSenderId: "1033877059394",
  appId: "1:1033877059394:web:1f079a3458580f02c67adb"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);