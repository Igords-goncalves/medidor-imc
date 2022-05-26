function Main() {
    const body = document.querySelector("body");
    const divPrincipal = document.querySelector(".caixa");
    const masc = document.querySelector('input#masc')
    const fem = document.querySelector('input#fem')

    const div = document.createElement("div");
    div.classList.add("container");

    const main = document.createElement("main");

    const criarDiv = (tag) => document.createElement(tag);

    const div1 = criarDiv("div");
    div1.setAttribute('id', 'nome')
    div1.innerHTML = "Nome";
    div1.setAttribute("type", "text");

    const div2 = criarDiv("div");
    div2.classList.add('genero');
    div2.innerHTML = "Gênero";

    const div3 = criarDiv("div");
    div3.setAttribute('id', 'altura');
    div3.innerHTML = "Altura";

    const div4 = criarDiv("div");
    div4.setAttribute('id', 'peso')
    div4.innerHTML = "Peso";

    const div5 = criarDiv("div")
    div5.setAttribute('id', 'masc')

    const div6 = criarDiv("div")
    div6.setAttribute('id', 'fem')

    const divs = [div1, div2, div3, div4];

    divs.forEach((el) => {
        el.classList.add("container");
    });

    divs.forEach((el) => {
        main.appendChild(el);
    });

    divPrincipal.append(main);

    const criarInput = (tag) => document.createElement(tag);

    const nome = criarInput("input");
    nome.classList.add("nome");
    nome.setAttribute('placeholder','Digite seu nome')

    div1.appendChild(nome);

    div2.appendChild(div5)
    div2.appendChild(div6)

    const generoMasc = criarInput("input");
    generoMasc.setAttribute("type", "radio");
    generoMasc.classList.add("genero");
    generoMasc.setAttribute('id', 'masc');
    div5.insertAdjacentHTML('afterend', 'Masculino')

    const generoFem = criarInput("input");
    generoFem.setAttribute("type", "radio");
    generoFem.classList.add("genero");
    generoFem.setAttribute('id', 'fem');
    div6.insertAdjacentHTML('afterend', 'Feminino')

    div5.appendChild(generoMasc)
    div6.appendChild(generoFem)

    const altura = criarInput("input");
    altura.setAttribute("type", "number");
    altura.classList.add("altura");
    altura.setAttribute('placeholder','1.00')

    div3.appendChild(altura);

    const peso = criarInput("input");
    peso.setAttribute("type", "number");
    peso.classList.add("peso");
    peso.setAttribute('placeholder','67.5')

    div4.appendChild(peso);
}

export default Main;
