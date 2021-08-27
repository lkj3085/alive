import "firebase/firestore";
import "firebase/auth";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA5570aWaBm4uuwGAIJva7uItTufnMQjEs",
  authDomain: "alive-2ee77.firebaseapp.com",
  projectId: "alive-2ee77",
  storageBucket: "alive-2ee77.appspot.com",
  messagingSenderId: "735108739039",
  appId: "1:735108739039:web:abe17d8e04d290e9adde6a",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
