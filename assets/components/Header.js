function Header() {
    const body = document.querySelector("body");

    const div = document.createElement("div");
    div.classList.add("caixa");

    const header = document.createElement("header");

    const h1 = document.createElement("h1");
    h1.innerHTML = "Medidor de IMC";
    header.appendChild(h1);

    body.appendChild(div).appendChild(header);
}
export default Header;
