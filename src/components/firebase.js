// Traemos a firebase
import firebase from "firebase/app";
// Traemos el servicio
import "firebase/firestore"

// Inicializamos la app
const firebaseConfig = {
  apiKey: "AIzaSyA1l9KmrqpgsbvytysTvJoARuZILjiXLps",
  authDomain: "coder-ecommerce-a580d.firebaseapp.com",
  projectId: "coder-ecommerce-a580d",
  storageBucket: "coder-ecommerce-a580d.appspot.com",
  messagingSenderId: "604278513496",
  appId: "1:604278513496:web:b1af24bc8869701cb9cf2d"
};

const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(app);

