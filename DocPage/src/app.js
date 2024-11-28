const user = JSON.parse(localStorage.getItem('cadastro')) || 0;

if (!user?.isLogged) {
  document.body.innerHTML = '';
}

const docName = document.querySelector('#docName');
const docCRM = document.querySelector('#docId');

const usrInfo = document.querySelector('.usr-info');
docName.textContent = user.nome;
docCRM.textContent = user.CRM;

usrInfo.appendChild(docName);
usrInfo.appendChild(docCRM);

// create the boxes in the page

const addIcon = (clsName) => {
  const icon = document.createElement('i');
  icon.setAttribute('class', clsName);
  icon.setAttribute('style', 'font-size:22px; margin-right: 5px;');
  return icon;
};

const addAnchor = (clsName, href, iconCls, text) => {
  const anchor = document.createElement('a');
  anchor.setAttribute('class', clsName);
  anchor.setAttribute('href', href);

  const icon = addIcon(iconCls);
  anchor.appendChild(icon);

  anchor.appendChild(document.createTextNode(text));

  return anchor;
};

const addDiv = (clsName) => {
  const div = document.createElement('div');
  div.setAttribute('class', clsName);
  return div;
};

function createElement() {
  const section = document.querySelector('section');
  const objIcon = [
    {
      href: '../meus-dados-medico/index.html',
      clas: 'fa-solid fa-user-doctor',
      text: 'Meus dados',
    },
    {
      href: '../Consulta-de-Pacientes/index.html',
      clas: 'fa-solid fa-magnifying-glass',
      text: 'Consultar pacientes',
    },
    {
      href: '#',
      clas: 'fa-solid fa-file-medical',
      text: 'Inserir Relatório Médico',
    },
    {
      href: '../feedback/index.html',
      clas: 'fa-regular fa-face-smile',
      text: 'Pesquisa de satisfação',
    },
  ];
  const div = addDiv('cards');

  objIcon.forEach((item) => {
    const anchor = addAnchor('box', item.href, item.clas, item.text);
    div.appendChild(anchor);
  });

  section.appendChild(div);
}
createElement();
