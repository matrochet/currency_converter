import { loadData } from "./loading.js";

const CURRENCIES = await loadData();

// Get input components
const inputCurrency = document.getElementById("input-currency");
const outputCurrency = document.getElementById("output-currency");

const inputValue = document.getElementById("input-value");
const outputValue = document.getElementById("output-value");

function convert() {
  const value = parseFloat(inputValue.value);
  const rateOutput = CURRENCIES[outputCurrency.value];
  const rateInput = CURRENCIES[inputCurrency.value];
  const rateEUR = CURRENCIES["eur"];
  console.log(CURRENCIES);
  const valueConvert = (value / rateInput) * rateOutput;
  console.log(rateOutput, rateInput, value);
  // const valueConvert = value * (rateInput / rateEUR) * rateOutput;
  outputValue.value = valueConvert;
}

inputValue.addEventListener("input", (event) => {
  convert();
});

outputCurrency.addEventListener("input", (event) => {
  convert();
});

inputCurrency.addEventListener("input", (event) => {
  convert();
});

const init = async () => {
  // Iter on data
  for (const [currency, value] of Object.entries(CURRENCIES)) {
    // Create an option
    const inputOption = document.createElement("option");
    inputOption.text = currency;
    inputOption.value = currency;

    // Add option
    inputCurrency.appendChild(inputOption);

    // Create an option
    const outputOption = document.createElement("option");
    outputOption.text = currency;
    outputOption.value = currency;

    // Add option
    outputCurrency.appendChild(outputOption);
  }
};

// fonction bouton inverser les valeurs des inputs
function reverseCurrencies() {
  // inverse les valeurs des deux champs de saisies
  const firstInput = document.getElementById("input-currency");
  const secondInput = document.getElementById("output-currency");

  const firstCurrencyInput = firstInput.value;
  const secondCurrencyInput = secondInput.value;

  firstInput.value = secondCurrencyInput;
  secondInput.value = firstCurrencyInput;

  // inverse les valeurs des deux champs de sortie 
  const firstOutput = document.getElementById("input-value");
  const secondOutput = document.getElementById("output-value");

  const firstCurrencyOutput = firstOutput.value;
  const secondCurrencyOutput = secondOutput.value;

  firstOutput.value = secondCurrencyOutput;
  secondOutput.value = firstCurrencyOutput;
}

document.getElementById("arrowbi").addEventListener("click", reverseCurrencies);
// fin fonction bouton

init();
