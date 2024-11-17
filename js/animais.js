document.querySelectorAll(".img-animal").forEach((animalName) =>
{
    animalName.addEventListener("click", () =>
    {
        const animal = encodeURIComponent(animalName.dataset.nome);
        window.location.href = `adocao.html?animal=${animal}`;
    });
});