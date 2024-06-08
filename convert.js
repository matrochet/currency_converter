import { loadData } from "./loading.js";

const init = async () => {
  const data = await loadData();

  // Get input components
  const inputCurrency = document.getElementById("input-currency");
  const outputCurrency = document.getElementById("output-currency");

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
