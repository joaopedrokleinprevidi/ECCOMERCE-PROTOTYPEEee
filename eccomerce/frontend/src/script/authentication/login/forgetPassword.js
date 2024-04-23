import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import initializeFirebaseAuth from "../../firebaseConnection.js"

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
  const auth = await initializeFirebaseAuth()
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

const modal = async () => {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  const modal = document.createElement("section");
  modal.classList.add("modal-forget-password");


  modal.innerHTML = `
  <h1> Esqueceu sua senha? </h1>
  
  <p class="p-info"> Insira seu email e lhe enviaremos um email para redifinir sua senha. </p>

  <input id="emailInputForgetPassword" type="email">
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
    } 
    else {
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

const buttonForgetPassword = document.querySelector(".button-forget-password");
buttonForgetPassword.addEventListener("click", () => {
  modal();
});

// const changePassword = async () => {
//   const user = await verifyIfUserIsAuth();
//   const userData = user.atributes;
//   console.log("userData in password: ", userData);

//   const newPassword = inputChangePassword.value;
//   console.log(newPassword);

//   const response = verifyPasswordRequirements(newPassword);
//   console.log("response in password: ", response);
//   if (response == "A senha é válida.") {
//     updatePassword(userData, newPassword)
//       .then(async () => {
//         alert("Senha alterada com sucesso");
//         window.location.href = "login.html";
//       })
//       .catch(async (error) => {
//         if ((error.code = "auth/requires-recent-login")) {
//           alert(
//             "Para validar essa ação, é preciso que tenha feito login recentemente. Redirecionaremos você até a pagina de login."
//           );
//           window.location.href = "login.html";
//         }
//         showErrorsByFirebase(error.code);
//         console.error("Erro ao alterar a senha: ", error);
//       });
//   } else {
//     console.log("Senha inválida: ", response);
//   }
// };

// buttonChangePassword.addEventListener("click", changePassword);
