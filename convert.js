import { loadData } from "./loading.js";

console.log("test");
const init = async () => {
  const data = await loadData();
  console.log(data);

  const inputCurrency = document.getElementById("input-currency");
  console.log(inputCurrency);

  for (const [currency, value] in Object.entries(data.rates)) {
    option = document.createElement("option");
    option.value = value;
    inputCurrency.appendChild(option);
  }
};

console.log("test");
init();
