// Adiciona um event listener a todas as imagens de animais.
// Quando clicadas, chama a função anônima que puxa o atributo dataset nome
// Vai para a página de doações, mas passando o nome como parâmetro na url

document.querySelectorAll(".img-animal").forEach((animalName) =>
{
    animalName.addEventListener("click", () =>
    {
        const animal = encodeURIComponent(animalName.dataset.nome);
        window.location.href = `adocao.html?animal=${animal}`;
    });
});