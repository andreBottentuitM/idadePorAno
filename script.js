function identidade() {
    let nome = prompt("Qual o seu nome?")
    let ano = prompt("Qual o ano que você nasceu?")

    if ((parseInt(ano) >= 1922) && (parseInt(ano) <= 2021)) {
        alert(`A idade de ${nome} é: ${2022 - ano}`)
    } else {
        alert("Error: Dado inserido errado!")
        prompt("Qual o ano que você nasceu?")
    }
}

identidade()