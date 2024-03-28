const rulesOfSignupFields = (data) => {
  const {
    email,
    nomeCompleto,
    cpf,
    dataNascimento,
    cep,
    endereco,
    numeroEndereco,
    complemento,
    referencia,
    cidade,
    estado,
  } = data;

  let errorMessage = "";

  //Verificando email
  if (!email.includes("@") || !email.includes(".") || email.length > 100) {
    errorMessage = "O email digitado é inválido.";
  }

  //Verificando nome
  if (nomeCompleto == "") {
    errorMessage = "O campo nome completo é obrigatório.";
  }

  if (cpf.length < 11 || cpf.length > 14) {
    errorMessage = "O CPF é inválido.";
  }
};

const formatCpfField = (cpf) => {
  let cpfUser = form.cpf.value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos do CPF
  cpfUser = cpf.replace(/(\d{3})(\d)/, "$1.$2"); // Adiciona o primeiro ponto após os primeiros 3 dígitos
  cpfUser = cpf.replace(/(\d{3})(\d)/, "$1.$2"); // Adiciona o segundo ponto após os segundos 3 dígitos
  cpfUser = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Adiciona o traço antes dos últimos 2 dígitos
  form.cpf.value = cpfUser;
};

const rulesOfSignUpFields = {};

rulesOfSignUpFields = {
  verifyEmail: (email) => {
    if (!email.includes("@") || !email.includes(".") || email.length > 100)
      return "O email digitado é inválido.";
  },

  verifyNome: (nome) => {
    if (nome == "") return "O campo nome completo é obrigatório.";
  },

  verifyCpf: (cpf) => {
    if (cpf.length < 11 || cpf.length > 14) {
      return "O CPF é inválido. Ele deve ter 11 ou 14 dígitos.";
    } else {
      formatCpfField(cpf);
    }
  },

  verifyDataNascimento: (dataNascimento) => {
    const today = new Date();
    const age = today.getFullYear() - dataNascimento.getFullYear();

    if (age >= 85 || idade < 10) {
      return "Digite corretamente sua data de nascimento.";
    }
    return;
  },
};
