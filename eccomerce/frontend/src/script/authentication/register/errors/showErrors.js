function createAndAppendErrorMessage(container, errorMessage) {
  console.log(container);
  if (container.querySelector(".error-message")) {
    //Se já existir uma mensagem de erro no campo atual, substitui o erro antigo pelo novo
    container.querySelector(".error-message").innerText = errorMessage;
  } else {
    // Se não existir, cria um novo elemento para erro
    const containerError = document.createElement("div");
    containerError.classList.add("container-error");

    //Elemento para mensagem de erro
    const paragrafoError = document.createElement("p");
    paragrafoError.classList.add("error-message");

    //Elemento para fechar o container de erro
    const buttonCloseErrorBox = document.createElement("span");
    buttonCloseErrorBox.innerHTML = `<span class="material-symbols-outlined button-error">
    close
    </span>`;
    buttonCloseErrorBox.addEventListener("click", () => {
      containerError.remove();
    });

    //Aloca erro ao paragrafo
    paragrafoError.innerText = errorMessage;
    containerError.append(paragrafoError, buttonCloseErrorBox);

    // Adiciona o elemento ao container

    container.append(containerError);

    setTimeout(() => {
      containerError.remove();
    }, 4000);
  }
}

function moveScrollBarToError(container) {
  if (container === document.getElementsByTagName("div"))
    container.scrollIntoView({ block: "center", behavior: "smooth" });
}

const errorsOfAcessData = (responseVerifyAcessData) => {
  //Verifica qual erro aconteceu nos Dados de Acesso.
  console.log("acess data errors: ", responseVerifyAcessData);
  const containerEmail = document.querySelector(".email");

  if (responseVerifyAcessData.includes("Os emails não são iguais")) {
    createAndAppendErrorMessage(containerEmail, "Os emails não são iguais.");
    //Mostrar no input "Email" que o campo é obrigatório.
  }

  if (
    responseVerifyAcessData.includes("O campo 'Confirmar email' é obrigatório")
  ) {
    createAndAppendErrorMessage(
      containerEmail,
      "O campo 'Confirmar email' é requerido."
    );
    //Mostrar no input "Confirmar email" que o campo é obrigatório.
  }

  if (responseVerifyAcessData.includes("O campo 'Email' é obrigatório")) {
    createAndAppendErrorMessage(containerEmail, "O campo 'Email' é requerido.");
    //Mostrar no input "Email" que o campo é obrigatório.
  }

  if (
    responseVerifyAcessData.includes(
      "O campo 'Email' deve conter o caractere '@'"
    )
  ) {
    createAndAppendErrorMessage(
      containerEmail,
      "O campo 'Email' deve conter o caractere '@'."
    );
  }

  const containerSenha = document.querySelector(".senha");

  if (responseVerifyAcessData.includes("As senhas não são iguais")) {
    createAndAppendErrorMessage(containerSenha, "As senhas não são iguais.");
    //Mostrar no input "Senha" que o campo é obrigatório.
  }

  if (
    responseVerifyAcessData.includes("O campo 'Confirmar senha' é obrigatório")
  ) {
    createAndAppendErrorMessage(
      containerSenha,
      "O campo 'Confirmar senha' é requerido."
    );
    //Mostrar no input "Confirmar senha" que o campo é obrigatório.
  }

  if (responseVerifyAcessData.includes("O campo 'Senha' é obrigatório")) {
    createAndAppendErrorMessage(containerSenha, "O campo 'Senha' é requerido.");
    //Mostrar no input "Senha" que o campo é obrigatório.
  }

  if (
    responseVerifyAcessData.includes(
      "O campo 'Senha' deve conter no mínimo 6 caracteres."
    )
  ) {
    createAndAppendErrorMessage(
      containerSenha,
      "O campo 'Senha' deve conter no mínimo 6 caracteres."
    );
    //Mostrar no input "Senha" que o campo é obrigatório.
  }

  if (
    responseVerifyAcessData.includes(
      "O campo 'Senha' deve conter no máximo 14 caracteres."
    )
  ) {
    createAndAppendErrorMessage(
      containerSenha,
      "O campo 'Senha' deve conter no máximo 14 caracteres."
    );
  }
  moveScrollBarToError(containerSenha);
};

const errorsOfPersonalData = (responseVerifyPersonalData) => {
  console.log("personal data errors: ", responseVerifyPersonalData);
  //Verifica qual erro aconteceu com os Dados Pessoais.
  const nomeContainer = document.querySelector(".nome");
  const cpfContainer = document.querySelector(".cpf");
  const celularContainer = document.querySelector(".celular");
  const generoContainer = document.querySelector(".genero");
  const nascimentoContainer = document.querySelector(".nascimento");

  if (
    responseVerifyPersonalData.includes(
      "O campo 'Nome completo' é obrigatório."
    )
  ) {
    createAndAppendErrorMessage(nomeContainer, "O campo é requerido.");
    moveScrollBarToError(nomeContainer);
    //Mostrar no input "Nome completo" que o campo é obrigatório.
  }
  if (responseVerifyPersonalData.includes("O campo 'CPF' é obrigatório")) {
    createAndAppendErrorMessage(cpfContainer, "O campo é requerido.");
    //Mostrar no input "CPF" que o campo é obrigatório.
  }
  if (
    responseVerifyPersonalData.includes(
      "O campo 'CPF' deve conter entre 11 e 14 caracteres."
    )
  ) {
    createAndAppendErrorMessage(
      cpfContainer,
      "O campo 'CPF' deve conter entre 11 e 14 caracteres."
    );
  }
  if (responseVerifyPersonalData.includes("O campo 'Celular' é obrigatório")) {
    createAndAppendErrorMessage(celularContainer, "O campo é requerido.");
    moveScrollBarToError(celularContainer);
    //Mostrar no input "Celular" que o campo é obrigatório.
  }
  if (responseVerifyPersonalData.includes("O campo 'Gênero' é obrigatório")) {
    createAndAppendErrorMessage(generoContainer, "O campo é requerido.");
    moveScrollBarToError(generoContainer);
    //Mostrar no input "Gênero" que o campo é obrigatório.
  }
  if (
    responseVerifyPersonalData.includes(
      "O campo 'Data de Nascimento' é obrigatório."
    )
  ) {
    createAndAppendErrorMessage(nascimentoContainer, "O campo é requerido.");
    moveScrollBarToError(nascimentoContainer);
    //Mostrar no input "Data de Nascimento" que o campo é obrigatório.
  }
};

const errorsOfAddressData = (responseVerifyAddressData) => {
  const containerCep = document.querySelector(".cep");
  const containerEndereco = document.querySelector(".endereco");
  const containerNumeroEndereco = document.querySelector(".numeroEndereco");
  const containerCidade = document.querySelector(".cidade");
  const containerEstado = document.querySelector(".estado");

  //Verifica qual erro aconteceu com os Dados de Endereço.
  if (responseVerifyAddressData.includes("O campo 'CEP' é obrigatório.")) {
    createAndAppendErrorMessage(containerCep, "O campo é requerido.");
    moveScrollBarToError(containerCep);
    //Mostrar no input "CEP" que o campo é obrigatório.
  }
  if (
    responseVerifyAddressData.includes(
      "O campo 'CEP' deve conter entre 5 e 9 caracteres."
    )
  ) {
    createAndAppendErrorMessage(
      containerCep,
      "O campo 'CEP' deve conter entre 5 e 9 caracteres."
    );
  }
  if (responseVerifyAddressData.includes("O campo 'Endereço' é obrigatório.")) {
    createAndAppendErrorMessage(containerEndereco, "O campo é requerido.");
    moveScrollBarToError(containerEndereco);
    //Mostrar no input "Endereço" que o campo é obrigatório.
  }
  if (responseVerifyAddressData.includes("O campo 'Número' é obrigatório.")) {
    createAndAppendErrorMessage(
      containerNumeroEndereco,
      "O campo é requerido."
    );
    moveScrollBarToError(containerNumeroEndereco);
    //Mostrar no input "Número" que o campo é obrigatório.
  }
  if (responseVerifyAddressData.includes("O campo 'Cidade' é obrigatório.")) {
    createAndAppendErrorMessage(containerCidade, "O campo é requerido.");
    moveScrollBarToError(containerCidade);
    //Mostrar no input "Cidade" que o campo é obrigatório.
  }
  if (responseVerifyAddressData.includes("O campo 'Estado' é obrigatório.")) {
    createAndAppendErrorMessage(containerEstado, "O campo é requerido.");
    moveScrollBarToError(containerEstado);
    //Mostrar no input "Estado" que o campo é obrigatório.
  }
};

const errorsOfAcceptTerms = (responseVerifyAcceptTerms) => {
  const containerAcceptTerms = document.querySelector(".accept-terms");
  if (
    responseVerifyAcceptTerms.includes(
      "Aceitar os termos de privacidade é obrigatório"
    )
  ) {
    createAndAppendErrorMessage(
      containerAcceptTerms,
      "Aceitar os termos de privacidade é obrigatório"
    );
    moveScrollBarToError(containerAcceptTerms);
  }
};

export default {
  errorsOfAcessData,
  errorsOfPersonalData,
  errorsOfAddressData,
  errorsOfAcceptTerms,
};
