import manageErrors from "../register/errors/showErrors.js";

const showErrorsByMiddlewaresInBackEnd = (error) => {
  if (error.code === "auth/email-already-in-use") {
    const containerEmail = document.querySelector(".email");
    manageErrors.createAndAppendErrorMessage(
      containerEmail,
      "Email já existe."
    );
    console.log("a");
    manageErrors.moveScrollBarToError(containerEmail);
    console.log("b");
  }

  //Criar uma lógica para o erro ser impresso na tela para o usuário.
};

export default showErrorsByMiddlewaresInBackEnd;
