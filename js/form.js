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
