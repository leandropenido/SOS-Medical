document.addEventListener("DOMContentLoaded", function() {
    // Certifique-se de que o botão de cadastro está presente
    const botaoCadastro = document.getElementById("botaoCadastro");

    // Verifique se o botão foi encontrado antes de adicionar o evento
    if (botaoCadastro) {
        botaoCadastro.addEventListener("click", function() {
            // Confirmação de cadastro
            let confirmacao = confirm("Você deseja se cadastrar?");
            
            if (confirmacao) {
                // Redireciona para a página de cadastro (verifique a URL)
                window.location.href = "http://127.0.0.1:5503/index%20(1).html"; 
            } else {
                // Caso o usuário cancele o cadastro
                alert("Cadastro cancelado!");
            }
        });
    } else {
        console.error("Botão de cadastro não encontrado!");
    }
});