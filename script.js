// Cotacao de moedas do dia
const USD = 5.71
const EUR = 5.99
const GBP = 7.21

// Obtendo os elementos do form
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
// Manipulando o input amount para receber somente numeros
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex,"")
})

// Capturando o evento de submit no form
form.onsubmit = (e) => {
  e.preventDefault()

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}

// Funcao para converter a moeda
function convertCurrency(amount, price, symbol) {
  try {
    // aplica a classe que exibe o footer com resultado
    footer.classList.add("show-result")
  } catch(error) {
    // remove a classe do footer removendo ele
    footer.classList.remove("show-result")
    
    console.log(error)
    alert("Não foi possível converter, tente novamente mais tarde.")
  }
}