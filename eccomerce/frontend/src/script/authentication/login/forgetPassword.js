import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import initializeFirebaseAuth from "../../firebaseConnection.js";

const buttonForgetPassword = document.querySelector(".button-forget-password");

const modal = () => {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  const modal = document.createElement("section");
  modal.classList.add("modal-forget-password");

  modal.innerHTML = `
  <h1> Esqueceu sua senha? </h1>
  
  <p class="p-info"> Insira seu email e lhe enviaremos um email para redifinir sua senha. </p>

  <input id="emailInputForgetPassword" type="email" placeholder="exemplo@gmail.com">
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
      console.log("removeu msg sucess");
    }
    if (modal.querySelector(".message-error-send-email")) {
      modal.querySelector(".message-error-send-email").remove();
      console.log("removeu msg error");
    }
    if (emailInput.value == "" || !emailInput.value.includes("@")) {
      console.log("email input in error: ", emailInput);
      const messageError = document.createElement("p");
      messageError.classList.add("message-error-send-email", "messages");
      messageError.innerText = "Insira um email válido.";
      modal.insertBefore(messageError, modal.children[3]);
    } else {
      console.log("email input in sucess: ", emailInput);
      requestNewPasswordWithEmail(emailInput.value);
      const messageSucess = document.createElement("p");
      messageSucess.classList.add("message-sucess-send-email", "messages");
      messageSucess.innerText = "Email enviado com sucesso";
      modal.insertBefore(messageSucess, modal.children[3]);

      const buttonSendEmail = modal.querySelector(
        ".button-send-email-forget-password"
      );
      buttonSendEmail.remove();
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

const requestNewPasswordWithEmail = async (email) => {
  const auth = await initializeFirebaseAuth();
  sendPasswordResetEmail(auth, email)
    .then(() => {})
    .catch((error) => {
      console.error(error.code + " " + error.message);
    });
};

buttonForgetPassword.addEventListener("click", () => {
  modal();
});
