//Verificar dados de acesso
const verifyAcessData = (accessData) => {
  let errorMessage = "";
  console.log(accessData);
  if ("email" in accessData) {
    if (accessData.email !== accessData.confirmEmail)
      errorMessage += "Os emails não são iguais. ";
    if (accessData.email == "") errorMessage += "O campo 'Email' é obrigatório";
    if (accessData.confirmEmail == "")
      errorMessage += "O campo 'Confirmar email' é obrigatório";
    if (!accessData.email.includes("@")) {
      errorMessage += "O campo 'Email' deve conter o caractere '@'. ";
    }
  }

  console.log("acessData senha rodou");
  if ("senha" in accessData) {
    if (accessData.senha !== accessData.confirmSenha)
      errorMessage += "As senhas não são iguais. ";
    if (accessData.senha === "")
      errorMessage += "O campo 'Senha' é obrigatório";
    if (accessData.confirmSenha === "")
      errorMessage += "O campo 'Confirmar senha' é obrigatório";
    if (accessData.senha.length < 6)
      errorMessage += "O campo 'Senha' deve conter no mínimo 6 caracteres.";
    if (accessData.senha.length > 14)
      errorMessage += "O campo 'Senha' deve conter no máximo 14 caracteres.";
  }
  if (errorMessage === "") {
    return true;
  } else {
    console.log("erros registrados ate o momento", errorMessage);
    return errorMessage;
  }
};

//Verificar dados pessoais
const verifyPersonalData = (personalData) => {
  let errorMessage = "";
  if ("nomeCompleto" in personalData) {
    if (personalData.nomeCompleto === "")
      errorMessage += "O campo 'Nome completo' é obrigatório. ";
  }
  if ("cpf" in personalData) {
    if (personalData.cpf === "")
      errorMessage += "O campo 'CPF' é obrigatório. ";
    if (personalData.cpf.length < 11 || personalData.cpf.length > 14)
      errorMessage += "O campo 'CPF' deve conter entre 11 e 14 caracteres. ";
  }
  if ("celular" in personalData) {
    if (personalData.celular === "")
      errorMessage += "O campo 'Celular' é obrigatório. ";
  }
  if ("genero" in personalData) {
    if (personalData.genero === "")
      errorMessage += "O campo 'Gênero' é obrigatório. ";
  }
  if ("dataNascimento" in personalData) {
    if (personalData.dataNascimento === "")
      errorMessage += "O campo 'Data de Nascimento' é obrigatório. ";
  }
  if (errorMessage === "") {
    return true;
  } else {
    return errorMessage;
  }
};

//Verificar dados de endereço
const verifyAddressData = (addressData) => {
  let errorMessage = "";
  if ("cep" in addressData) {
    if (addressData.cep === "") errorMessage += "O campo 'CEP' é obrigatório. ";
    if (addressData.cep.length < 5 || addressData.cep.length > 9)
      errorMessage += "O campo 'CEP' deve conter entre 5 e 9 caracteres. ";
  }
  if ("endereco" in addressData) {
    if (addressData.endereco === "")
      errorMessage += "O campo 'Endereço' é obrigatório. ";
  }
  if ("numeroEndereco" in addressData || "numero" in addressData) {
    if (addressData.numeroEndereco === "")
      errorMessage += "O campo 'Número' é obrigatório. ";
  }
  if ("cidade" in addressData) {
    if (addressData.cidade === "")
      errorMessage += "O campo 'Cidade' é obrigatório. ";
  }
  if ("estado" in addressData) {
    if (addressData.estado === "")
      errorMessage += "O campo 'Estado' é obrigatório. ";
  }

  if (errorMessage === "") {
    return true;
  } else {
    return errorMessage;
  }
};

const verifyAcceptTerms = (acceptTerms) => {
  let errorMessage = "";
  if (acceptTerms.checked) {
    return true;
  } else {
    errorMessage += "Aceitar os termos de privacidade é obrigatório.";
    return errorMessage;
  }
};
export default {
  verifyAcessData,
  verifyPersonalData,
  verifyAddressData,
  verifyAcceptTerms,
};
