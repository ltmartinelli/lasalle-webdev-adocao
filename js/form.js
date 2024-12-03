// Se houver nome como parâmetro na url, extrai ele e utiliza para encontrar a opção correspondente
// nas opções do select do formulário e define ela como o valor selecionado

const params = new URLSearchParams(window.location.search);
const animal = params.get("animal");

if (animal)
{
    const selectField = document.getElementById("animal-escolhido");
    const optionToSelect = Array.from(selectField.options).find(
        (option) => option.value === decodeURIComponent(animal)
    );
    if (optionToSelect)
    {
        selectField.value = optionToSelect.value;
    }
}
