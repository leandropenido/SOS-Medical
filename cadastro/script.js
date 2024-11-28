function insertJSON(obj) {
  const database = JSON.parse(localStorage.getItem('cadastro')) || [];
  if (database === 0) {
    localStorage.setItem('cadastro', JSON.stringify(obj));
  } else {
    if (JSON.stringify(database) === JSON.stringify(obj)) {
      alert('Cadastro já existente, favor logar! ');
    } else {
      localStorage.setItem('cadastro', JSON.stringify(obj));
    }
  }
}

function randID() {
  return Math.floor(Math.random() * 100 + 1);
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#cadastroForm');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.querySelector('#nome');
    const convenio = document.querySelector('#convenio');
    const email = document.querySelector('#email');
    const cpf = document.querySelector('#cpf');
    const nascimento = document.querySelector('#nascimento');
    const gender = document.querySelector('#genero');
    const userContext = document.querySelector('.form-select');
    const password = document.querySelector('#senha');
    const docCRM = document.querySelector('#CRM');

    let isValid = true;

    document.querySelectorAll('.error-message').forEach((msg) => msg.remove());

    const validateField = (field, message) => {
      if (!field.value.trim()) {
        showError(field, message);
        isValid = false;
      }
    };

    const validateCPF = (cpfValue) => {
      return /^\d{11}$/.test(cpfValue);
    };

    const validateEmail = (emailValue) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(emailValue);
    };

    validateField(nome, 'Por favor, insira seu nome completo.');
    validateField(telefone, 'Por favor, insira seu telefone.');
    if (!validateEmail(email.value)) {
      showError(email, 'Por favor, insira um e-mail válido.');
      isValid = false;
    }
    if (!validateCPF(cpf.value)) {
      showError(cpf, 'Por favor, insira um CPF válido com 11 dígitos.');
      isValid = false;
    }
    validateField(nascimento, 'Por favor, insira sua data de nascimento.');
    const obj = {
      nome: nome.value,
      convenio: convenio.value,
      email: email.value,
      cpf: cpf.value,
      nascimento: nascimento.value,
      genero: gender.value,
      senha: password.value,
      id: randID(),
    };
    if (userContext.value === 'P') {
      obj.usuario = 'paciente';
    } else {
      obj.CRM = docCRM.value;
      obj.usuario = 'medico';
    }
    if (isValid) {
      alert('Cadastro realizado com sucesso!');
      obj.isLogged = false;
      insertJSON(obj);

      form.reset();
    }
  });

  function showError(inputElement, message) {
    const errorMessage = document.createElement('span');
    errorMessage.textContent = message;
    errorMessage.className = 'error-message';
    errorMessage.style.color = 'red';
    errorMessage.style.fontSize = '14px';
    errorMessage.style.marginTop = '5px';
    inputElement.parentElement.appendChild(errorMessage);
  }
});
