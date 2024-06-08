import { loadData } from "./loading.js";

// Get input components
const inputCurrency = document.getElementById("input-currency");
const outputCurrency = document.getElementById("output-currency");

const inputValue = document.getElementById("input-value");
const outputValue = document.getElementById("output-value");

inputValue.addEventListener("input", (event) => {
  const value = event.data;
  const currency = inputCurrency.value;

  // Apply real function to convert currency here
  const valueConvert = value * 1.5;
  // --------------------------------------------

  outputValue.value = valueConvert;
});

const init = async () => {
  const data = await loadData();

  // Iter on data
  for (const [currency, value] of Object.entries(data)) {
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
