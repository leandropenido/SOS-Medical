const editarBtn = document.getElementById('editar');
const salvarBtn = document.getElementById('salvar');
const nomeInput = document.getElementById('nome');
const cpfInput = document.getElementById('cpf');
const sexoInput = document.getElementById('sexo');
const nascimentoInput = document.getElementById('nascimento');
const emailInput = document.getElementById('email');
const telefoneInput = document.getElementById('telefone');
const convenioInput = document.getElementById('convenio');
const mensagem = document.getElementById('mensagem');
const userRegister = JSON.parse(localStorage.getItem('cadastro'));

editarBtn.addEventListener('click', () => {
  nomeInput.disabled = false;
  cpfInput.disabled = false;
  nascimentoInput.disabled = false;
  emailInput.disabled = false;
  sexoInput.disabled = false;
  telefoneInput.disabled = false;
  convenioInput.disabled = false;

  salvarBtn.classList.remove('hidden');
  editarBtn.classList.add('hidden');
  mensagem.textContent = '';
});

salvarBtn.addEventListener('click', () => {
  const nome = nomeInput.value;
  const cpf = cpfInput.value;
  const nascimento = nascimentoInput.value;
  const email = emailInput.value;
  const genero = sexoInput.value;
  const telefone = telefoneInput.value;
  const convenio = convenioInput.value;

  mensagem.textContent = 'Dados salvos com sucesso.';
  mensagem.style.color = 'lightblue';

  const obj = {
    nome,
    cpf,
    nascimento,
    email,
    genero,
    telefone,
    convenio,
    usuario: userRegister.usuario,
    senha: userRegister.senha,
    isLogged: userRegister.isLogged,
  };
  localStorage.setItem('cadastro', JSON.stringify(obj));

  nomeInput.disabled = true;
  cpfInput.disabled = true;
  sexoInput.disabled = true;
  nascimentoInput.disabled = true;
  emailInput.disabled = true;
  telefoneInput.disabled = true;
  convenioInput.disabled = true;

  salvarBtn.classList.add('hidden');
  editarBtn.classList.remove('hidden');
});
