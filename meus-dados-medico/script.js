document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('medicoForm');
  const nomeCompleto = document.getElementById('nomeCompleto');
  const telefone = document.getElementById('telefone');
  const email = document.getElementById('email');
  const cpf = document.getElementById('cpf');
  const crm = document.getElementById('crm');
  const especialidade = document.getElementById('especialidade');
  const dataNascimento = document.getElementById('dataNascimento');
  const genero = document.getElementById('genero');
  const userRegister = JSON.parse(localStorage.getItem('cadastro'));

  form.addEventListener(
    'submit',
    function (event) {
      debugger;
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        const medicoData = {
          nome: nomeCompleto.value,
          telefone: telefone.value,
          email: email.value,
          cpf: cpf.value,
          CRM: crm.value,
          genero: genero.value,
          nascimento: dataNascimento.value,
          especialidade: especialidade.value,
          senha: userRegister.senha,
          isLogged: userRegister.isLogged,
          usuario: userRegister.usuario,
        };
        localStorage.setItem('cadastro', JSON.stringify(medicoData));
        alert('Dados salvos com sucesso!');
      }

      form.classList.add('was-validated');
    },
    false
  );

  document.getElementById('editButton').addEventListener('click', function () {
    const formElements = form.elements;
    for (const element of formElements) {
      element.readOnly = false;
      element.disabled = false;
    }
    document.querySelector('button[type="submit"]').disabled = false;
  });

  nomeCompleto.addEventListener('input', function () {
    const regex = /^[A-Za-z\s]+$/;
    if (!regex.test(nomeCompleto.value)) {
      nomeCompleto.setCustomValidity('Por favor, insira apenas letras.');
      nomeCompleto.classList.add('is-invalid');
    } else {
      nomeCompleto.setCustomValidity('');
      nomeCompleto.classList.remove('is-invalid');
    }
  });

  telefone.addEventListener('input', function () {
    const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
    if (!regex.test(telefone.value)) {
      telefone.setCustomValidity(
        'Por favor, insira um telefone válido no formato (xx) xxxxx-xxxx.'
      );
      telefone.classList.add('is-invalid');
    } else {
      telefone.setCustomValidity('');
      telefone.classList.remove('is-invalid');
    }
  });

  email.addEventListener('input', function () {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email.value)) {
      email.setCustomValidity('Por favor, insira um email válido.');
      email.classList.add('is-invalid');
    } else {
      email.setCustomValidity('');
      email.classList.remove('is-invalid');
    }
  });

  genero.addEventListener('change', function () {
    if (genero.value === '') {
      genero.setCustomValidity('Por favor, selecione um gênero.');
      genero.classList.add('is-invalid');
    } else {
      genero.setCustomValidity('');
      genero.classList.remove('is-invalid');
    }
  });
});
