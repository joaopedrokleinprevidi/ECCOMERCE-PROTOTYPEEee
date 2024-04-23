import manageErrors from "../register/errors/showErrors.js";

const verifyErrorsByFirebase = (errorCode) => {
  let errorMessage = "";

  if (errorCode == "auth/internal-error") {
    errorMessage = "Erro interno do servidor. Tente novamente.";
  }

  if (errorCode == "auth/invalid-argument") {
    errorMessage =
      "Argumentos inválidos, por favor tente novamente seguindo as convenções necessárias.";
  }

  if (errorCode == "auth/user-not-found") {
    errorMessage = "Usuário não encontrado";
  }

  if (errorCode == "auth/invalid-email") {
    errorMessage = "O email digitado é inválido.";
  }

  if (errorCode == "auth/missing-password") {
    errorMessage = "A senha ou o email estão incorretos.";
  }

  if (errorCode == "auth/wrong-password") {
    errorMessage = "A senha ou o email estão incorretos.";
  }

  if (errorCode == "auth/invalid-credential") {
    errorMessage = "A senha ou o email estão incorretos.";
  }

  if (errorCode == "auth/too-many-requests") {
    errorMessage =
      "Muitas tentativas incorretas de login. Aguarde para tentar novamente ou troque a sua senha.";
  }

  if (!errorMessage == "") {
    return errorMessage;
  }
};

const showErrorsByFirebase = (errorCode) => {
  const typeError = verifyErrorsByFirebase(errorCode);
  const loginContainer = document.querySelector(".container-login");

  manageErrors.createAndAppendErrorMessage(loginContainer, typeError);
};

export default showErrorsByFirebase;
