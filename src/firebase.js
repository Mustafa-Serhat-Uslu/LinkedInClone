import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA1qfLI8iC772sphL2OVZezh9L9iZ0U6MM",
    authDomain: "linkedin-clone-yt-a8dac.firebaseapp.com",
    projectId: "linkedin-clone-yt-a8dac",
    storageBucket: "linkedin-clone-yt-a8dac.appspot.com",
    messagingSenderId: "347100032591",
    appId: "1:347100032591:web:2a56d8a992e04a4aa3c43a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};