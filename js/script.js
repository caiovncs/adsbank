const accordionList = document.querySelectorAll(['[data-anime="accordion"] dt']);

function toggleAccordion(item) {
  item.nextElementSibling.classList.toggle('ativo');
  item.classList.toggle('ativo');
}

function addDtEvent() {
  accordionList.forEach((item) => {
    item.addEventListener('click', () => toggleAccordion(item));
  });
}

function init() {
  if (accordionList.length) {
    toggleAccordion(accordionList[0]);
    addDtEvent();
  }
  return this;
}
init();

//Validação do formulário
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('myForm').addEventListener('submit', function (event) {
      if (!validateNome()) {
          alert('Nome inválido');
          event.preventDefault();
      }

      if (!validateCPF()) {
          alert('CPF inválido');
          event.preventDefault();
      }

      if (!validateEmail()) {
          alert('E-mail inválido');
          event.preventDefault();
      }

      if (!validateTelefone()) {
          alert('Telefone inválido');
          event.preventDefault();
      }

      if (!validateDataNascimento()) {
          alert('Deve ter mais de 18 anos a partir de 01 de dezembro de 2023.');
          event.preventDefault();
      }

      if (!validateCEP()) {
          alert('CEP inválido');
          event.preventDefault();
      }

  });

  function validateNome() {
      var nome = document.getElementById('nomeCompleto').value;
      return /^[a-zA-Z\s]+$/.test(nome);
  }

  function validateCPF() {
      var cpf = document.getElementById('cpf').value;
      return /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(cpf);
  }

  function validateEmail() {
      var email = document.getElementById('email').value;
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validateTelefone() {
      var telefone = document.getElementById('telefone').value;
      return /^\d{10,11}$/.test(telefone);
  }

  function validateDataNascimento() {
      var dataNascimento = new Date(document.getElementById('dataNascimento').value);
      var dataLimite = new Date('2023-12-01');

      var diff = new Date(dataLimite - dataNascimento);
      var idade = Math.abs(diff.getUTCFullYear() - 1970);

      return idade >= 18;
  }

  function validateCEP() {
      var cep = document.getElementById('cep').value;
      return /^\d{5}\-\d{3}$/.test(cep);
  }
});