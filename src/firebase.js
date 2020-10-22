import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA8yrxCc3PjegUIyp3VAiE3VihOoW4rl2A",
  authDomain: "slack-clone-1a097.firebaseapp.com",
  databaseURL: "https://slack-clone-1a097.firebaseio.com",
  projectId: "slack-clone-1a097",
  storageBucket: "slack-clone-1a097.appspot.com",
  messagingSenderId: "384680863157",
  appId: "1:384680863157:web:34af247114a38eed7865fc",
  measurementId: "G-76809N49B2",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;


// If firebase expired
// https://console.firebase.google.com/u/0/project/slack-clone-1a097/firestore/rules
