const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

// Manipulando o input amount para receber somente numeros
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex,"")
})

// Capturando o evento de submit no form
form.onsubmit = (e) => {
  e.preventDefault()

  console.log(currency.value)
}