// Encontra e seleciona os inputs utilizados e adiciona event listener aos botões de enviar e fechar modal

document.getElementById("send").addEventListener("click", sendInfo)
const modal = document.getElementById("modal-bg")
const close_btn = document.getElementById("close-btn")
close_btn.addEventListener("click", closeModal)

const input_nome = document.getElementById("nome-pessoa")
const input_animal = document.getElementById("animal-escolhido")
const input_dia = document.getElementById("data")
const input_horario = document.getElementsByName("horario")

const modal_title = document.getElementById("modal-title")
const modal_text = document.getElementById("modal-text")

const form = document.querySelector("form")

function sendInfo(event)
{
    // Quando chama a função ao enviar o formulário, extrai os dados

    event.preventDefault();
    const nome = input_nome.value.trim();
    const animal = input_animal.value;
    const dia = input_dia.value;
    let horario_selecionado = "";

    input_horario.forEach((input) =>
    {
        if (input.checked)
        {
            horario_selecionado = input.value;
        }
    });

    // Valida dados obrigatórios

    if (!nome || !animal || !dia || !horario_selecionado)
    {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Define o html interno com os dados passados

    modal_title.innerHTML = `Obrigado, ${nome}!`
    modal_text.innerHTML = `Te aguardamos no dia ${dia}, ${horario_selecionado}, para a adoção do seu novo amigo, o ${animal}`

    // Faz com que o modal apareça    
    modal.style.display = "flex";
}

function closeModal()
{
    // Reseta o formulário e faz com que o modal desapareça
    form.reset()
    modal.style.display = "none"
}
