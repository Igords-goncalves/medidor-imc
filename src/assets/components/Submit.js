import Resultado from "./Resultado.js";
import Main from "./Main.js";
import Botao from "./Botao.js";

// A Ideia era não precisar capturar os elementos novamente
// usar os elementos de outros arquivos, mas ...

function Submit() {

    const nome = document.querySelector('#nome > input');
    const altura = document.querySelector('#altura > input').value;
    const peso = document.querySelector('#peso > input').value;
    const resultado = document.querySelector('#resultado');

    console.log(peso)

    // //~~> Regra de negócio

    if (Number(altura) != 0 && Number(peso) != 0) {
        let calcIMC = (peso / (Math.pow(altura, 2))).toFixed(2)

        if (calcIMC < 18.5 ) {
            resultado.innerHTML = `Cuidado! Magreza grau 0, esse é seu IMC ${calcIMC}  ${nome.value}
        `} else if (calcIMC >= 18.5 && calcIMC < 24.9) {
            resultado.innerHTML = `Muito bem! Seu IMC é de ${calcIMC} e esse é um bom indicador ${nome.value}`
        } else if (calcIMC >= 25 && calcIMC <= 29.9) {
            resultado.innerHTML = `Cuidado! Você está acima do peso, seu IMC é ${calcIMC} ${nome.value}`
        } else if (calcIMC >= 30 && calcIMC <= 39.9 ) {
            resultado.innerHTML = `Cuidado! Você está acima do peso, seu IMC é ${calcIMC} ${nome.value}`
        } else if (calcIMC > 40) {
            resultado.innerHTML = `Cuidado! Procure ajuda, seu IMC é ${calcIMC} ${nome.value}`
        }
    }
}

export default Submit