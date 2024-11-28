const patientInfo = JSON.parse(localStorage.getItem('cadastro'));

document.querySelector('#submit').addEventListener('click', function (event) {
  event.preventDefault();

  const diseaseType = document.querySelector('#tipoDoenca').value;
  const diseaseSymptoms = document.querySelector('#sintomas').value;
  const diseaseTreatment = document.querySelector('#tratativa').value;
  const medicationName = document.querySelector('#medicamento').value;
  const medicationFrequency = document.querySelector('#frequencia').value;
  const allergyType = document.querySelector('#alergias').value;

  const obj = {
    diseaseType,
    diseaseSymptoms,
    diseaseTreatment,
    medicationName,
    medicationFrequency,
    allergyType,
  };

  if (obj) {
    alert('Cadastro realizado com sucesso!');
    const userHealth = {
      person: patientInfo,
      healthStatus: obj,
    };
    localStorage.setItem('paciente', JSON.stringify(userHealth));
  }
});
