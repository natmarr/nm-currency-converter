let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let eur = 4.6301;
let usd = 4.0892;
let gbp = 5.4434;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    switch (currencyElement.value) {
        case "EUR":
            result = amountElement.value / eur;
            break;

        case "USD":
            result = amountElement.value / usd;
            break;

        case "GBP":
            result = amountElement.value / gbp;
            break;
    }

    resultElement.innerText = `${result.toFixed(2)} ${currencyElement.value}`;

});