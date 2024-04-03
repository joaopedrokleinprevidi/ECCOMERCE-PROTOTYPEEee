import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import initializeFirebaseAuth from "../../firebaseConnection.js";

import newUser from "./newUser.js";
import showErrorsByMiddlewaresInBackEnd from "../showErrors/backendErrors.js";
import verifyFields from "./errors/verifyData.js";
import showErrors from "./errors/showErrors.js";

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
    confirmSenha: form.confirmPassword.value,
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
  const responseVerifyAcessData = verifyFields.verifyAcessData(accessData);

  if (responseVerifyAcessData !== true) {
    showErrors.errorsOfAcessData(responseVerifyAcessData);
  }

  //Verificar dados pessoais
  const responseVerifyPersonalData =
    verifyFields.verifyPersonalData(personalData);

  if (responseVerifyPersonalData !== true) {
    showErrors.errorsOfPersonalData(responseVerifyPersonalData);
  }

  //Verificar dados de endereço
  const responseVerifyAddressData = verifyFields.verifyAddressData(addressData);

  if (responseVerifyAddressData !== true) {
    showErrors.errorsOfAddressData(responseVerifyAddressData);
  }

  //Se não ocorrer nenhum erro, ou seja: se todos os campos estiverem preenchidos corretamente: Cadastra o usuário.
  if (
    responseVerifyAcessData === true &&
    responseVerifyPersonalData === true &&
    responseVerifyAddressData === true
  ) {
    handleRegisterNewUser(accessData, personalData, addressData);
  }
}

//Agora tenho que adaptar esta função aqui abaixo

async function handleRegisterNewUser(accessData, personalData, addressData) {
  //Salvando senha de forma diferente, porque ela não irá ao banco de dados.
  const senha = accessData.senha;
  console.log(personalData);
  console.log(personalData.nomeCompleto);
  console.log(accessData);

  //Dados recebidos do usuário
  const dataUser = {
    email: accessData.email,
    nomeCompleto: personalData.nomeCompleto,
    cpf: personalData.cpf,
    celular: personalData.celular,
    genero: personalData.genero,
    dataNascimento: personalData.dataNascimento,
    cep: addressData.cep,
    endereco: addressData.endereco,
    numeroEndereco: addressData.numeroEndereco,
    complemento: addressData.complemento,
    referencia: addressData.referencia,
    cidade: addressData.cidade,
    estado: addressData.estado,
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

buttonRegister.addEventListener("click", verifyFieldsOfRegister);

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
