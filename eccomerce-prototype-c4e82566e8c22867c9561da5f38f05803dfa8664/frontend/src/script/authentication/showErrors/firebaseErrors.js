const showErrorsByFirebase = async (errorCode) => {
  let errorMessage = "";

  if (errorCode == "auth/internal-error") {
    errorMessage = "Erro interno do servidor. Tente novamente.";
  }

  if (errorCode == "auth/invalid-argument") {
    errorMessage =
      "Argumentos inválidos, por favor tente novamente seguindo as convenções necessárias.";
  }

  if (errorCode == "auth/email-already-exists") {
    errorMessage =
      "O e-mail fornecido já está em uso por outro usuário. Cada usuário precisa ter um e-mail exclusivo.";
  }

  if (errorCode == "auth/invalid-phone-number") {
    errorMessage =
      "O telefone digitado é inválido. Ele precisa seguir o padrão E.164 para ser um telefone válido.";
  }

  if (errorCode == "auth/phone-number-alredy-exists") {
    errorMessage =
      "O telefone digitado está em uso por outro usuário. Cada usuário precisa ter um número de telefone exclusivo.";
  }

  if (errorCode == "auth/too-many-requests") {
    errorMessage =
      "O número de ações realizadas pelo usuário é alta demais para um curto período. Por favor, tente novamente mais tarde.";
  }

  if (errorCode == "uid/alredy-exits") {
    errorMessage ==
      "O uid fornecido já está sendo usado por um usuário existente. É necessário que cada usuário tenha um uid exclusivo.";
  }

  if (errorCode == "auth/missing-uid") {
    errorMessage =
      "É necessário que seja informado o UID do usuário para realizar esta ação.";
  }

  if (errorCode == "auth/invalid-id-token") {
    errorMessage = "O token informado não é válido.";
  }

  if (errorCode == "auth/invalid-email") {
    errorMessage = "O email digitado é inválido.";
  }

  if (errorCode == "auth/weak-password") {
    errorMessage = "A senha deve ter pelo menos 6 caracteres.";
  }

  if (errorCode == "auth/wrong-password") {
    errorMessage = "A senha ou o email estão incorretos.";
  }

  if (errorCode == "auth/user-not-found") {
    errorMessage = "Usuário não encontrado";
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
  //Criar uma lógica para o erro ser impresso na tela para o usuário.
};

export default showErrorsByFirebase;
