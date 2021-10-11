// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import 'firebase/storage'; 
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = firebase.initializeApp({
    apiKey: "AIzaSyCADDMjmMTv5FOCigMBIVE__lNomcwAFjw",
    authDomain: "camre-dev.firebaseapp.com",
    databaseURL: "https://camre-dev-default-rtdb.firebaseio.com",
    projectId: "camre-dev",
    storageBucket: "camre-dev.appspot.com",
    messagingSenderId: "927104351349",
    appId: "1:927104351349:web:d190c0f773dcd838b68c3c"
  });
  export const db = app.firestore(); 
  export const auth = app.auth();
  export const storage = getStorage(app);
  export default app;