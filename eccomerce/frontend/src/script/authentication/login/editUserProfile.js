import showErrors from "../register/errors/showErrors.js";
import verifyFields from "../register/errors/verifyData.js";
import verifyIfUserIsAuth from "../verifyMiddlewares/verifyIfUserIsAuth.js";
import changeEmail from "./changeEmail.js";

const containerPersonalData = document.querySelector(".personal-data");

const nome = document.querySelector(".data-name");
const sexo = document.querySelector(".data-sex");
const nascimento = document.querySelector(".data-date");
const cpf = document.querySelector(".data-cpf");
const email = document.querySelector(".data-email");
const celular = document.querySelector(".data-cellphone");

const estado = document.querySelector(".data-state");
const cidade = document.querySelector(".data-city");
const cep = document.querySelector(".data-cep");
const endereco = document.querySelector(".data-address");
const numero = document.querySelector(".data-number");
const complemento = document.querySelector(".data-complemento");
const referencia = document.querySelector(".data-referencia");

const buttonEditCadastro = document.querySelector("#editCadastro");
const buttonEditAddress = document.querySelector("#editAddress");

let isEditingCadastro = "";
let isEditingAddress = "";

const getDataOfUser = async () => {
  try {
    const user = await verifyIfUserIsAuth();
    const userUid = user.atributes.uid;
    const userToken = user.token;
    const response = await fetch(
      `http://localhost:3000/users/editProfile/${userUid}`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao tentar pegar dados do usuário: ", error);
  }
};

const receiveDataInProfileEditFields = async () => {
  try {
    const response = await getDataOfUser();

    nome.innerHTML = `<strong>Nome:</strong> ${response.nomeCompleto}`;
    sexo.innerHTML = `<strong>Sexo:</strong> ${response.genero}`;
    nascimento.innerHTML = `<strong>Data de Nascimento:</strong> ${response.dataNascimento}`;
    cpf.innerHTML = `<strong>CPF:</strong> ${response.cpf}`;
    email.innerHTML = `<strong>Email:</strong> ${response.email}`;
    celular.innerHTML = `<strong>Celular:</strong> ${response.celular}`;

    estado.innerHTML = `<strong>Estado:</strong> ${response.estado} `;
    cidade.innerHTML = `<strong>Cidade:</strong> ${response.cidade}`;
    cep.innerHTML = `<strong>CEP:</strong> ${response.cep}`;
    endereco.innerHTML = `<strong>Endereco:</strong> ${response.endereco}`;
    numero.innerHTML = `<strong>Número:</strong> ${response.numeroEndereco}`;
    complemento.innerHTML = `<strong>Complemento:</strong> ${response.complemento}`;
    referencia.innerHTML = `<strong>Referencia:</strong> ${response.referencia}`;
  } catch (error) {
    console.error(
      "Erro ao trazer os dados atuais do usuário para os campos: ",
      error
    );
  }
};

const startEditCadastro = async () => {
  const response = await getDataOfUser();

  const confirmEmail = document.createElement("p");
  confirmEmail.classList.add("datas", "data-confirmEmail", "confirmEmail");

  containerPersonalData.insertBefore(
    confirmEmail,
    containerPersonalData.children[4].nextSibling
  );

  //Crio inputs para iniciar edição de dados de CADASTRO quando necessário
  nome.innerHTML = `<strong>Nome:</strong> <input type="text" class="inputs-edit-profile" id="nomeEditProfile" value="${response.nomeCompleto}">`;
  sexo.innerHTML = `
  <strong>Sexo:</strong> <select class="inputs-edit-profile" id="sexoEditProfile" value="${response.genero}">
  <option value="Masculino">Masculino</option>
  <option value="Feminino">Feminino</option>
  <option value="Preferiu não declarar">Prefiro não declarar</option>
  </select>`;
  nascimento.innerHTML = `<strong>Data de Nascimento:</strong> <input type="date" class="inputs-edit-profile" id="nascimentoEditProfile" value="${response.dataNascimento}">`;
  cpf.innerHTML = `<strong>CPF:</strong> <input type="text" class="inputs-edit-profile cpfInput" id="cpfEditProfile" maxlength="14" value="${response.cpf}">`;
  email.innerHTML = `<strong>Email:</strong> <input type="text" class="inputs-edit-profile" id="emailEditProfile" value="${response.email}">`;
  confirmEmail.innerHTML = `<strong>Confirmar email:</strong> <input type="text" class="inputs-edit-profile" id="confirmEmailEditProfile" value="${response.email}">`;
  celular.innerHTML = `<strong>Celular:</strong> <input type="text" class="inputs-edit-profile telefoneInput" placeholder="(54) 99242-3443" maxlength="15" id="celularEditProfile" value="${response.celular}">`;

  formatCPFandTelefone();
};

const formatCPFandTelefone = () => {
  const cpfInput = document.querySelector(".cpfInput");
  cpfInput.addEventListener("input", () => {
    let cpf = cpfInput.value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2"); // Insere o primeiro ponto após os primeiros 3 dígitos
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2"); // Insere o segundo ponto após os segundos 3 dígitos
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Insere o traço após os últimos 3 ou 2 dígitos
    cpfInput.value = cpf;
  });
  const telefoneInput = document.querySelector(".telefoneInput");
  telefoneInput.addEventListener("input", () => {
    let telefone = telefoneInput.value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
    telefone = telefone.slice(0, 11); // Garante que o telefone tenha no máximo 11 caracteres
    telefone = telefone.replace(/(\d{2})(\d)/, "($1) $2"); // Insere os parênteses e o espaço após os primeiros 2 dígitos
    telefone = telefone.replace(/(\d{5})(\d)/, "$1-$2"); // Insere o hífen após os último dígitos
    telefoneInput.value = telefone;
  });
};

const startEditAddress = async () => {
  const response = await getDataOfUser();

  //Crio inputs para iniciar edição de dados de ENDEREÇO quando necessário
  estado.innerHTML = `<strong>Estado:</strong> <input type="text" class="inputs-edit-profile" id="estadoEditProfile" value="${response.estado}">`;

  cidade.innerHTML = `<strong>Cidade:</strong> <input type="text" class="inputs-edit-profile" id="cidadeEditProfile" value="${response.cidade}">`;
  cep.innerHTML = `<strong>Cep:</strong> <input type="text" class="inputs-edit-profile" id="cepEditProfile" value="${response.cep}">`;
  endereco.innerHTML = `<strong>Endereço:</strong> <input type="text" class="inputs-edit-profile" id="enderecoEditProfile" value="${response.endereco}">`;
  numero.innerHTML = `<strong>Número:</strong> <input type="text" class="inputs-edit-profile" id="numeroEditProfile" value="${response.numeroEndereco}">`;
  complemento.innerHTML = `<strong>Complemento:</strong> <input type="text" class="inputs-edit-profile" id="complementoEditProfile" value="${response.complemento}">`;
  referencia.innerHTML = `<strong>Referencia:</strong> <input type="text" class="inputs-edit-profile" id="referenciaEditProfile" value="${response.referencia}">`;
};

const getUpdatedDataOfUserAfterFillingEditCadastro = async () => {
  const user = await verifyIfUserIsAuth();
  const userUid = user.atributes.uid;

  //Pego valores dos inputs criados para edição de CADASTRO quando necessário
  const nome = document.querySelector("#nomeEditProfile").value;
  const sexo = document.querySelector("#sexoEditProfile").value;
  const nascimento = document.querySelector("#nascimentoEditProfile").value;
  const cpf = document.querySelector("#cpfEditProfile").value;
  const email = document.querySelector("#emailEditProfile").value;
  const confirmEmail = document.querySelector("#confirmEmailEditProfile").value;
  const celular = document.querySelector("#celularEditProfile").value;

  //Salvo os valores em um objeto
  const updatedDataOfUser = {
    uid: userUid,
    nomeCompleto: nome,
    genero: sexo,
    cpf: cpf,
    dataNascimento: nascimento,
    email: email,
    confirmEmail: confirmEmail,
    celular: celular,
  };

  return updatedDataOfUser;
};

const getUpdatedDataOfUserAfterFillingEditAddress = async () => {
  const user = await verifyIfUserIsAuth();
  const userUid = user.atributes.uid;

  //Pego valores dos inputs criados para edição de ENDEREÇO quando necessário
  const estado = document.querySelector("#estadoEditProfile").value;
  const cidade = document.querySelector("#cidadeEditProfile").value;
  const cep = document.querySelector("#cepEditProfile").value;
  const endereco = document.querySelector("#enderecoEditProfile").value;
  const numero = document.querySelector("#numeroEditProfile").value;
  const complemento = document.querySelector("#complementoEditProfile").value;
  const referencia = document.querySelector("#referenciaEditProfile").value;

  const updatedDataOfUser = {
    uid: userUid,
    estado: estado,
    cidade: cidade,
    cep: cep,
    endereco: endereco,
    numeroEndereco: numero,
    complemento: complemento || "(Não informado)",
    referencia: referencia || "(Não informado)",
  };

  return updatedDataOfUser;
};

const verifyIfEmailExistsBeforeSave = async () => {
  const user = await verifyIfUserIsAuth();
  const userToken = user.token;
  const email = document.querySelector("#emailEditProfile").value;
  console.log(email)

   const responseFetch = await fetch(`http://localhost:3000/users/updateProfile/${email}`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${userToken}`,
    },
  }).then((response) => {
      return response.json()
  }).catch((error) => {
    console.error("erro ao tentar verificar se o email existe: ",error);
  });

  return responseFetch;
};

// const maluquise = async () => {
//   if(cadastroMode){
//     const updatedDataOfUser = await getUpdatedDataOfUserAfterFillingEditCadastro();
//     await checkChangesMadeByUsersForErrors(updatedDataOfUser)
//   }
//   if (addressMode) {
//     const updatedDataOfUser = await getUpdatedDataOfUserAfterFillingEditAddress();
//     await checkChangesMadeByUsersForErrors(updatedDataOfUser)
//   }

// }

const checkChangesMadeByUsersForErrors = async (cadastroMode, addressMode) => {
  let updatedDataOfUser = "";

  //Pego os dados atualizados do usuário, utilizando o sistema criado para entender qual dado está sendo editado
  if (cadastroMode) {
    updatedDataOfUser = await getUpdatedDataOfUserAfterFillingEditCadastro();
  }
  if (addressMode) {
    updatedDataOfUser = await getUpdatedDataOfUserAfterFillingEditAddress();
  }

  const responseVerifyAcessData =
    verifyFields.verifyAcessData(updatedDataOfUser);

  if (responseVerifyAcessData !== true) {
    console.log("Erro em dados de acesso: email.");
    showErrors.errorsOfAcessData(responseVerifyAcessData);
  }

  const responseVerifyPersonalData =
    verifyFields.verifyPersonalData(updatedDataOfUser);

  if (responseVerifyPersonalData !== true) {
    console.log("Erro em dados pessoais.");
    showErrors.errorsOfPersonalData(responseVerifyPersonalData);
  }

  const responseVerifyAddressData =
    verifyFields.verifyAddressData(updatedDataOfUser);
  if (responseVerifyAddressData !== true) {
    showErrors.errorsOfAddressData(responseVerifyAddressData);
  }

  if (
    responseVerifyAcessData === true &&
    responseVerifyPersonalData === true &&
    responseVerifyAddressData === true
  ) {

    if (cadastroMode) {
      const containerData = document.querySelector('.container-data');
      try {
         const response = await verifyIfEmailExistsBeforeSave();
         if (response === null) {
           try {
             const emailChanged = await changeEmail(updatedDataOfUser.email);
             console.log("emailChanged: ", emailChanged);
             if (emailChanged) {
               console.log("Email de acesso alterado com sucesso.");
               await saveChangesOfEditInBackEnd(updatedDataOfUser);
               await receiveDataInProfileEditFields();
               return true;
             }
           } catch (error) {
             console.log("show errors");
             console.log(error, "<<< erro criado in change email");
             showErrors.createAndAppendErrorMessage(containerData.children[4], "Email já existe.");
           }
         } else {
           showErrors.createAndAppendErrorMessage(
             containerData.children[4],
             "Email já existe"
           );
         }
      } catch (error) {
         console.error("Erro ao verificar se o email existe antes de salvar:", error);
      }
     }

    if (addressMode) {
      await saveChangesOfEditInBackEnd(updatedDataOfUser);
      await receiveDataInProfileEditFields();
      return true;
    }

  }
};

const saveChangesOfEditInBackEnd = async (updatedDataOfUser) => {
  try {
    const user = await verifyIfUserIsAuth();
    const userToken = user.token;
    await fetch("http://localhost:3000/users/editProfile", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify(updatedDataOfUser),
    });
  } catch (error) {
    console.error(
      "Erro ao tentar salvar as alterações realizadas pelo usuário: ",
      error
    );
  }
};

const toggleEditModeCadastro = async () => {
  if (!isEditingCadastro) {
    await startEditCadastro();
    buttonEditCadastro.innerText = "Salvar";
    isEditingCadastro = true;
    console.log("Iniciou edição");
  } else {
    //Essa função abaixo verifica os dados e chama a função que atualiza no Back-End.
    if ((await checkChangesMadeByUsersForErrors(true, false)) === true) {
      console.log("Iniciou verificação e concluiu edição");
      containerPersonalData.removeChild(containerPersonalData.children[5]); //Removendo o campo "Confirmar Email" que deve existir apenas na edição de CADASTRO.
      buttonEditCadastro.innerText = "Editar Cadastro";
      isEditingCadastro = false;
    } else {
      console.log(
        "Não deu pra terminar a edição.  Aconteceu algum erro. Tente novamente."
      );
      isEditingCadastro = true;
      return;
    }
  }
};

const toggleEditModeAddress = async () => {
  if (!isEditingAddress) {
    await startEditAddress();
    buttonEditAddress.innerText = "Salvar";
    isEditingAddress = true;
    console.log("Iniciou edição");
  } else {
    if ((await checkChangesMadeByUsersForErrors(false, true)) === true) {
      console.log("Iniciou verificação e concluiu edição, tudo certo.");
      buttonEditAddress.innerText = "Editar Endereço";
      isEditingAddress = false;
    } else {
      isEditingAddress = true;
      return;
    }
  }
};

buttonEditCadastro.addEventListener("click", toggleEditModeCadastro);
buttonEditAddress.addEventListener("click", toggleEditModeAddress);

if (window.location.href.includes("myAccount")) {
  const awaitRunEditProfile = async () => {
    await receiveDataInProfileEditFields();
  };
  awaitRunEditProfile();
}
