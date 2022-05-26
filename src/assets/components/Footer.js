function Footer() {
    const body = document.querySelector("body");

    const divPrincipal = document.querySelector(".caixa");

    const footer = document.createElement("footer");

    const p = document.createElement("p");
    p.innerHTML = "&copy; Igor Gonçalves";

    footer.appendChild(p);

    divPrincipal.appendChild(footer);
}

export default Footer;
