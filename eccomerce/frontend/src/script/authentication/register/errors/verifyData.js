//Verificar dados de acesso
const verifyAcessData = (accessData) => {
  let errorMessage = "";
  if (accessData.email !== accessData.confirmEmail)
    errorMessage += "Os emails não são iguais. ";
  if (accessData.email == "") errorMessage += "O campo 'Email' é obrigatório";
  if (accessData.confirmEmail == "")
    errorMessage += "O campo 'Confirmar email' é obrigatório";
  if (accessData.senha !== accessData.confirmSenha)
    errorMessage += "As senhas não são iguais. ";
  if (accessData.senha === "") errorMessage += "O campo 'Senha' é obrigatório";
  if (accessData.confirmSenha === "")
    errorMessage += "O campo 'Confirmar senha' é obrigatório";
  if (accessData.senha.length < 6)
    errorMessage += "O campo 'Senha' deve conter no mínimo 6 caracteres.";

  if (errorMessage === "") {
    return true;
  } else {
    return errorMessage;
  }
};

//Verificar dados pessoais
const verifyPersonalData = (personalData) => {
  let errorMessage = "";
  if (personalData.nomeCompleto === "")
    errorMessage += "O campo 'Nome completo' é obrigatório. ";
  if (personalData.cpf === "") errorMessage += "O campo 'CPF' é obrigatório. ";
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
};

//Verificar dados de endereço
const verifyAddressData = (addressData) => {
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
