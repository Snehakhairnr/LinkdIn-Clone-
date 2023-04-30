// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxbpeSbvwWmqGj7aCeY-F01KJTdzq_vL8",
  authDomain: "linkdin-clone-6fec5.firebaseapp.com",
  projectId: "linkdin-clone-6fec5",
  storageBucket: "linkdin-clone-6fec5.appspot.com",
  messagingSenderId: "966329842799",
  appId: "1:966329842799:web:e8bf62650f6f007f9f219a",
  measurementId: "G-C0W8ZGP1TX",
};
//this special line of code here connects everything
const firebaseApp = firebase.initializeApp(firebaseConfig);
//get the firebase databse
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
