document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const emailInput = document.querySelector('input[type="email"]');
  const passwordInput = document.querySelector('input[type="password"]');
  const selectOrigin = document.querySelector('select');
  const forgotPasswordLink = document.querySelector('a[href="#"]');
  const submitButton = document.querySelector('button[type="submit"]');
  const userRegister = JSON.parse(localStorage.getItem('cadastro'));

  function grantAccess(user) {
    userRegister.isLogged = true;
    localStorage.setItem('cadastro', JSON.stringify(userRegister));
    if (user === 'P') {
      window.location.href = '../Portal-paciente/index.html';
    } else {
      window.location.href = '../DocPage/index.html';
    }
  }
  // Função para exibir mensagens de erro
  function showError(inputElement, message) {
    const errorMessage = document.createElement('span');
    errorMessage.textContent = message;
    errorMessage.className = 'error-message';
    errorMessage.style.color = 'red';
    errorMessage.style.fontSize = '14px';
    errorMessage.style.marginTop = '5px';
    inputElement.parentElement.appendChild(errorMessage);
  }
  // Função para validar e-mail
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  document.querySelectorAll('.error-message').forEach((msg) => msg.remove());

  // Validação do formulário
  form.addEventListener('submit', (event) => {
    let isValid = true;
    // Validação de e-mail
    if (!emailInput.value.trim()) {
      isValid = false;
      showError(emailInput, 'Por favor, insira seu e-mail.');
    } else if (!validateEmail(emailInput.value.trim())) {
      isValid = false;
      showError(emailInput, 'Por favor, insira um e-mail válido.');
    }

    // Validação de senha
    if (!passwordInput.value.trim()) {
      isValid = false;
      showError(passwordInput, 'Por favor, insira sua senha.');
    }

    if (isValid) {
      if (
        emailInput.value === userRegister.email &&
        passwordInput.value === userRegister.senha
      ) {
        const temp = selectOrigin.value;
        console.log(temp, userRegister);
        if (
          (temp === 'P' && userRegister.usuario === 'paciente') ||
          (temp === 'M' && userRegister.usuario === 'medico')
        ) {
          grantAccess(temp);
        } else {
          alert('Usuário cadastrado como outro tipo.');
        }
      } else {
        alert('Usuário ou senha inválidos');
      }
    }

    event.preventDefault();
  });

  // Efeito no botão ao passar o mouse
  submitButton.addEventListener('mouseover', () => {
    submitButton.style.transform = 'scale(1.05)';
  });
  submitButton.addEventListener('mouseout', () => {
    submitButton.style.transform = 'scale(1)';
  });
});
