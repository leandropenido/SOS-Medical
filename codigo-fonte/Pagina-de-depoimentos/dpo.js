document.addEventListener("DOMContentLoaded", () => {
    // Exibe/oculta o texto da missão
    const missaoLink = document.getElementById("missao");
    const missaoTexto = document.getElementById("missao-texto");

    missaoLink.addEventListener("click", (event) => {
        event.preventDefault(); // Impede o comportamento padrão do link
        if (missaoTexto.classList.contains("visivel")) {
            missaoTexto.classList.remove("visivel");
            missaoTexto.classList.add("oculto");
        } else {
            missaoTexto.classList.remove("oculto");
            missaoTexto.classList.add("visivel");
        }
    });

    // Redirecionamentos já são tratados nos atributos "href" dos links
});
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("carregar-mais");
    const hiddenBlocks = document.querySelectorAll(".bloco.oculto");

    button.addEventListener("click", () => {
        hiddenBlocks.forEach((block) => {
            block.classList.remove("oculto");
        });
        button.style.display = "none"; // Esconde o botão após mostrar os depoimentos
    });
});