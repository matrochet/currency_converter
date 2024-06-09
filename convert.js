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

init();
