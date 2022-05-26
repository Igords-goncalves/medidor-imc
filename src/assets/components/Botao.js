import Submit from "./Submit.js";

function Botao() {
    const divPrincipal = document.querySelector(".caixa");

    const div = document.createElement("div");
    div.classList.add("botao");

    const botao = document.createElement("input");
    botao.setAttribute("type", "button");
    botao.setAttribute('id', 'botao')
    botao.value = "Calcular";
    botao.setAttribute('event', 'clicar')

    div.appendChild(botao);

    divPrincipal.appendChild(div);

    const calcular = document.querySelector('[event="clicar"]')

    calcular.onclick = Submit
}

export default Botao;