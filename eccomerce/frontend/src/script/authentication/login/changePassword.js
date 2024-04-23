import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import initializeFirebaseAuth from "../../firebaseConnection.js";
import verifyIfUserIsAuth from "../verifyMiddlewares/verifyIfUserIsAuth.js";

const buttonForgetPassword = document.querySelector(".button-forget-password");

let userEmail = "";

const modal = async () => {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  const modal = document.createElement("section");
  modal.classList.add("modal-forget-password");

  const response = await verifyIfUserIsAuth();
  userEmail = response.atributes.email;

  modal.innerHTML = `
  <h1> Altere sua senha </h1>
  
  <p class="p-info"> Insira seu email e lhe enviaremos um email para redifinir sua senha. </p>

  <input id="emailInputForgetPassword" type="email" value="${userEmail}">
  <div class="buttons-forget-password">
    <button class="buttons button-send-email-forget-password">Enviar</button>
    <button class="buttons button-cancel-forget-password">Fechar</button>
  </div>

  `;

  overlay.append(modal);

  const buttonSendEmail = modal.querySelector(
    ".button-send-email-forget-password"
  );
  const emailInput = modal.querySelector("#emailInputForgetPassword");

  buttonSendEmail.addEventListener("click", () => {
    if (modal.querySelector(".message-sucess-send-email")) {
      modal.querySelector(".message-sucess-send-email").remove();
    }
    if (modal.querySelector(".message-error-send-email")) {
      modal.querySelector(".message-error-send-email").remove();
    }

    if (emailInput.value == "" || !emailInput.value.includes("@")) {
      console.log("email input in error: ", emailInput);
      showErrorMessage(modal, "Insira um email válido");
    } else if (emailInput.value != userEmail) {
      showErrorMessage(
        modal,
        "O email digitado não corresponde ao email de cadastro"
      );
    } else {
      try {
        requestNewPasswordWithEmail(emailInput.value, modal);
        showSuccessMessage(modal, "Email enviado com sucesso");
        modal.querySelector(".button-send-email-forget-password").remove();
      } catch (error) {
        console.log(error);
      }
    }
  });
  const buttonCancelar = document.querySelector(
    ".button-cancel-forget-password"
  );
  buttonCancelar.addEventListener("click", () => {
    modal.remove();
    overlay.remove();
  });
};

const showErrorMessage = (modal, message) => {
  const messageError = document.createElement("p");
  messageError.classList.add("message-error-send-email", "messages");
  messageError.innerText = message;
  modal.insertBefore(messageError, modal.children[3]);
};

const showSuccessMessage = (modal, message) => {
  const messageSuccess = document.createElement("p");
  messageSuccess.classList.add("message-sucess-send-email", "messages");
  messageSuccess.innerText = message;
  modal.insertBefore(messageSuccess, modal.children[3]);
};

const requestNewPasswordWithEmail = async (email, modal) => {
  const auth = await initializeFirebaseAuth();
  sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log("Email enviado com sucesso");
    })
    .catch((error) => {
      if (error.code == "auth/user-not-found") {
        showErrorMessage(modal, "Usuário não encontrado");
      } else {
        return error;
      }
    });
};

buttonForgetPassword.addEventListener("click", () => {
  modal();
});
