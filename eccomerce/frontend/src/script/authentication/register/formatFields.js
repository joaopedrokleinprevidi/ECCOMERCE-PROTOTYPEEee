const cpfInput = document.querySelector(".cpfInput");

cpfInput.addEventListener("input", formatCPF);

function formatCPF() {
  let cpf = cpfInput.value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2"); // Insere o primeiro ponto após os primeiros 3 dígitos
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2"); // Insere o segundo ponto após os segundos 3 dígitos
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Insere o traço após os últimos 3 ou 2 dígitos
  cpfInput.value = cpf;
}

const telefoneInput = document.querySelector("#telefoneInput");

telefoneInput.addEventListener("input", formatTelefone);

function formatTelefone() {
  let telefone = telefoneInput.value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
  telefone = telefone.slice(0, 11); // Garante que o telefone tenha no máximo 11 caracteres
  telefone = telefone.replace(/(\d{2})(\d)/, "($1) $2"); // Insere os parênteses e o espaço após os primeiros 2 dígitos
  telefone = telefone.replace(/(\d{5})(\d)/, "$1-$2"); // Insere o hífen após os próximos 5 dígitos
  telefoneInput.value = telefone;
}
