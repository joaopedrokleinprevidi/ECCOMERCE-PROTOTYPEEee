import { updateEmail } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import verifyIfUserIsAuth from "../verifyMiddlewares/verifyIfUserIsAuth.js";

const changeEmail = async (newEmail) => {
  const user = await verifyIfUserIsAuth();
  const userData = user.atributes;
  console.log("userData in email: ", userData);

  updateEmail(userData, newEmail)
    .then(() => {
      console.log("Email atualizado com sucesso!");
    })
    .catch((error) => {
      if ((error.code = "auth/requires-recent-login")) {
        alert(
          "Para poder realizar a troca de email, é necessári que você tenha feito login recentemente. Redirecionaremos você até a pagina de login, depois volte e tente novamente."
        );
        window.location.href = "signUpOrSignIn.html";
      }

      console.log("Ocorreu um erro ao atualizar o Email: ", error);
    });
};

export default changeEmail;
