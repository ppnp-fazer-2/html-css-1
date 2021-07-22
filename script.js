function meuAlerta() {
    alert("Você clicou errado!")
}

function adicionarTexto() {
    document.getElementsByTagName("h3")[0].innerHTML = "Mudei o valor do H3"
}

const imagem =  document.getElementsByTagName("img")[0]

console.log(imagem)

imagem.addEventListener("click", meuAlerta)

const titulo =  document.getElementsByTagName("h1")[0]

titulo.addEventListener("click", adicionarTexto)