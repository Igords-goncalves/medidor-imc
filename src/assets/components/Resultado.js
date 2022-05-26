function Resultado() {
    const divPrincipal = document.querySelector(".caixa");

    const resultado = document.createElement("div");
    resultado.classList.add("resultado");
    resultado.setAttribute('id', 'resultado')
    
    divPrincipal.appendChild(resultado);
}

export default Resultado;
