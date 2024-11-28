const pacientes = [
    {
        nome: "João Silva",
        idade: 45,
        historico: "Hipertensão, Diabetes",
        exames: {
            exameSangue: "Normal",
            radiografia: "Sem alterações",
            outros: "Nenhum problema identificado"
        }
    },
    {
        nome: "Maria Oliveira",
        idade: 30,
        historico: "Alergia a medicamentos",
        exames: {
            exameSangue: "Leucócitos elevados",
            radiografia: "Inflamação pulmonar",
            outros: "Precisa de acompanhamento"
        }
    },
    {
        nome: "Carlos Santos",
        idade: 55,
        historico: "Cirurgia cardíaca recente",
        exames: {
            exameSangue: "Anemia leve",
            radiografia: "Marcadores pós-operatórios normais",
            outros: "Reabilitação em andamento"
        }
    }
];


function buscarPaciente(nome) {
    return pacientes.find(paciente => 
        paciente.nome.toLowerCase() === nome.toLowerCase().trim()
    );
}

const form = document.getElementById("form-buscar-paciente");
const nomeSpan = document.getElementById("nome");
const idadeSpan = document.getElementById("idade");
const historicoSpan = document.getElementById("historico");
const exameSangueSpan = document.getElementById("exameSangue");
const radiografiaSpan = document.getElementById("radiografia");
const outrosRelatoriosSpan = document.getElementById("outrosRelatorios");

function exibirDadosPaciente(paciente) {
    nomeSpan.textContent = paciente.nome;
    idadeSpan.textContent = paciente.idade + " anos";
    historicoSpan.textContent = paciente.historico;
    exameSangueSpan.textContent = paciente.exames.exameSangue;
    radiografiaSpan.textContent = paciente.exames.radiografia;
    outrosRelatoriosSpan.textContent = paciente.exames.outros;
}

function limparDados() {
    nomeSpan.textContent = "Não encontrado";
    idadeSpan.textContent = "-";
    historicoSpan.textContent = "-";
    exameSangueSpan.textContent = "-";
    radiografiaSpan.textContent = "-";
    outrosRelatoriosSpan.textContent = "-";
}

form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const nomePaciente = document.getElementById("nomePaciente").value;

    const pacienteEncontrado = buscarPaciente(nomePaciente);
    if (pacienteEncontrado) {
        exibirDadosPaciente(pacienteEncontrado);
    } else {
        limparDados();
        alert("Paciente não encontrado. Verifique o nome digitado.");
    }
    form.reset();
});
