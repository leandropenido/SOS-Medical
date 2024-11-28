const user = JSON.parse(localStorage.getItem('cadastro')) || 0;

const userNome = document.querySelector('#userName');
const userConvenio = document.querySelector('#convenio');
const usrInfo = document.querySelector('.usr-info');

userNome.textContent = `Paciente: ${user.nome}`;
userConvenio.textContent = `Convênio: ${user.convenio}`;

usrInfo.appendChild(userNome);
usrInfo.appendChild(userConvenio);
