import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import initializeFirebaseAuth from "../../firebaseConnection.js";

import showErrorsByFirebase from "../showErrors/firebaseErrors.js";
import verifyIfUserIsAuth from "../verifyMiddlewares/verifyIfUserIsAuth.js";

const buttonLogin = document.querySelector(".button-login");

const emailUser = document.querySelector("#emailInput");
const passwordUser = document.querySelector("#passwordInput");

async function handleLoginExistentUser(e) {
  e.preventDefault();
  const email = emailUser.value;
  const senha = passwordUser.value;

  const auth = await initializeFirebaseAuth();
  signInWithEmailAndPassword(auth, email, senha)
    .then(async (userCredential) => {
      console.log("login data: ", userCredential.user);
      await verifyIfUserIsAuth();

      alert("Usuário logado");
      window.location.href = "index.html";
    })

    .catch((error) => {
      //Pode ser implementado middleware tanto aqui quanto no back no cadastro tbm
      const errorCode = error.code;
      showErrorsByFirebase(errorCode);
      console.error("Erro ao logar: ", error);
    });
}
buttonLogin.addEventListener("click", handleLoginExistentUser);
