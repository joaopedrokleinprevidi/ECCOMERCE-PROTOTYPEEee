import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

let firebaseConfig;

// Função para inicializar o Firebase Auth
function initializeFirebaseAuth() {
  const firebaseConfig = {
    apiKey: "AIzaSyAHXc8p7UYug-qMEoGb4nacarrvBg52XFo",
    authDomain: "eccomerce-prototype-450c2.firebaseapp.com",
    projectId: "eccomerce-prototype-450c2",
    storageBucket: "eccomerce-prototype-450c2.appspot.com",
    messagingSenderId: "541210597903",
    appId: "1:541210597903:web:7cc45935ab34a7683ea17a",
  };

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);

  return auth;
}

export default initializeFirebaseAuth;
