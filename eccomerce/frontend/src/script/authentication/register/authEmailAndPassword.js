import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import initializeFirebaseAuth from "../../firebaseConnection.js";

import newUser from "./newUser.js";
import showErrorsByMiddlewaresInBackEnd from "../showErrors/backendErrors.js";
import verifyPasswordRequirements from "../verifyMiddlewares/passwordRequirements.js";

const buttonRegister = document.querySelector(".button-register");

const form = document.querySelector("form");

function verifyFieldsOfRegister(event) {
  event.preventDefault();
  //Verificar dados recebidos do usuário

  //Dados de acesso
  const accessData = {
    email: form.email.value,
    confirmEmail: form.confirmEmail.value,
    senha: form.senha.value,
    confirmSenha: form.confirmSenha.value,
  };

  //Dados pessoais
  const personalData = {
    nomeCompleto: form.nome_completo.value,
    cpf: form.cpf.value,
    celular: form.celular.value,
    genero: form.sexo.value,
    dataNascimento: form.nascimento.value,
  };

  //Dados de endereço
  const addressData = {
    cep: form.cep.value,
    endereco: form.endereco.value,
    numeroEndereco: form.numero_endereco.value,
    complemento: form.complemento.value,
    referencia: form.referencia.value,
    cidade: form.cidade.value,
    estado: form.estado.value,
  };

  //Verificar dados de acesso
  function verifyAcessData(accessData) {
    let errorMessage = "";
    if (accessData.email === accessData.confirmEmail)
      errorMessage += "Os emails não são iguais. ";
    if (accessData.senha === accessData.confirmSenha)
      errorMessage += "As senhas não são iguais. ";

    if (errorMessage === "") {
      return true;
    } else {
      return errorMessage;
    }
  }

  //Verificar dados pessoais
  function verifyPersonalData(personalData) {
    let errorMessage = "";
    if (personalData.nomeCompleto === "")
      errorMessage += "O campo 'Nome completo' é obrigatório. ";
    if (personalData.cpf === "")
      errorMessage += "O campo 'CPF' é obrigatório. ";
    if (personalData.celular === "")
      errorMessage += "O campo 'Celular' é obrigatório. ";
    if (personalData.genero === "")
      errorMessage += "O campo 'Gênero' é obrigatório. ";
    if (personalData.dataNascimento === "")
      errorMessage += "O campo 'Data de Nascimento' é obrigatório. ";

    if (errorMessage === "") {
      return true;
    } else {
      return errorMessage;
    }
  }

  //Verificar dados de endereço
  function verifyAddressData(addressData) {
    let errorMessage = "";
    if (addressData.cep === "") errorMessage += "O campo 'CEP' é obrigatório. ";
    if (addressData.endereco === "")
      errorMessage += "O campo 'Endereço' é obrigatório. ";
    if (addressData.numeroEndereco === "")
      errorMessage += "O campo 'Número' é obrigatório. ";
    if (addressData.cidade === "")
      errorMessage += "O campo 'Cidade' é obrigatório. ";
    if (addressData.estado === "")
      errorMessage += "O campo 'Estado' é obrigatório. ";
  }

  if (errorMessage === "") {
    return true;
  } else {
    return errorMessage;
  }

  /* 
  
  Todas as funções acima de verificação de campos devem ficar em outro arquivo.

  Aqui eu devo chamar as funções de verificação de cada campo e armazenar o resultado em uma constante.
  Faço a chamada da função, e abro um if/else para se o resultado for diferente de true, eu chamo a função que exibe os erros. Isso deve ser feito para as três verificações.
  
  */

  function callErrorsOfAcessData(responseVerifyAcessData) {
    //Verifica qual erro aconteceu.
    if (responseVerifyAcessData.includes("Os emails não são iguais.")) {
      //Mostrar no input "Email" que o campo é obrigatório.
    }

    if (responseVerifyAcessData.includes("As senhas não são iguais.")) {
      //Mostrar no input "Senha" que o campo é obrigatório.
    }
  }
}

function callErrorsOfPersonalData(responseVerifyPersonalData) {
  //Verifica qual erro aconteceu.
  if (
    responseVerifyPersonalData.includes(
      "O campo 'Nome completo' é obrigatório."
    )
  ) {
    //Mostrar no input "Nome completo" que o campo é obrigatório.
  }
  if (responseVerifyPersonalData.includes("O campo 'CPF' é obrigatório.")) {
    //Mostrar no input "CPF" que o campo é obrigatório.
  }
  if (responseVerifyPersonalData.includes("O campo 'Celular' é obrigatório.")) {
    //Mostrar no input "Celular" que o campo é obrigatório.
  }
  if (responseVerifyPersonalData.includes("O campo 'Gênero' é obrigatório.")) {
    //Mostrar no input "Gênero" que o campo é obrigatório.
  }
  if (
    responseVerifyPersonalData.includes(
      "O campo 'Data de Nascimento' é obrigatório."
    )
  ) {
    //Mostrar no input "Data de Nascimento" que o campo é obrigatório.
  }
}

async function handleRegisterNewUser(event) {
  event.preventDefault();

  //Salvando senha de forma diferente, porque ela não irá ao banco de dados.
  const senha = form.senha.value;

  //Dados recebidos do usuário
  const dataUser = {
    email: form.email.value,
    nomeCompleto: form.nome_completo.value,
    cpf: form.cpf.value,
    celular: form.celular.value,
    genero: form.sexo.value,
    dataNascimento: form.nascimento.value,
    cep: form.cep.value,
    endereco: form.endereco.value,
    numeroEndereco: form.numero_endereco.value,
    complemento: form.complemento.value,
    referencia: form.referencia.value,
    cidade: form.cidade.value,
    estado: form.estado.value,
  };

  //Enviando dados para o Back-End > Banco De Dados
  const auth = await initializeFirebaseAuth();
  createUserWithEmailAndPassword(auth, dataUser.email, senha)
    .then((userCredential) => {
      const uid = userCredential.user.uid;
      newUser(uid, { ...dataUser });
      console.log({ ...dataUser });

      cleanFieldsOfForm();
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          alert("User has been authenticated with sucess");

          // window.location.href = "index.html";
        }
      });
    })
    .catch((error) => {
      console.error("Erro ao cadastrar: ", error);
      showErrorsByMiddlewaresInBackEnd(error);
    });
}

buttonRegister.addEventListener("click", handleRegisterNewUser);

const cleanFieldsOfForm = () => {
  form.email.value = "";
  form.senha.value = "";
  form.nome_completo.value = "";
  form.cpf.value = "";
  form.celular.value = "";
  form.nascimento.value = "";
  form.cep.value = "";
  form.endereco.value = "";
  form.numero_endereco.value = "";
  form.complemento.value = "";
  form.referencia.value = "";
  form.cidade.value = "";
};
