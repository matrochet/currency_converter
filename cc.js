import { loadData } from "./loading.js";

const CURRENCIES = loadData();

//Collect all the properties of the CURRENCIES object
const currenciesList = Object.keys(CURRENCIES);

console.log(currenciesList);

// For each currency

// Personalize the HTML code of line

const fragment = document.createDocumentFragment();

for (const currency of currenciesList) {
  const rates = CURRENCIES[currency];

  const divElement = document.createElement("div");
  divElement.innerHTML = `
  <div class="devise">
    <input type="number" id="eur-${currency}" step="0.00001" value="1" />
    <span>EUR</span>
    <span class="egal">------------</span>
    <input type="number" id="${currency}-eur" step="0.00001" value="${rates}" />
    <span>GBP</span>
  </div>`;

  fragment.appendChild(divElement);
}

// Collect the container
const container = document.getElementById("container");

// Add the fragment to the container
container.appendChild(fragment);

// Récupérer les deux champs
// const eurgbpInput = document.getElementById("input-eurgbp");
// const gbpeurInput = document.getElementById("input-gbpeur");
//
// Initialize the rate show at screen
// gbpeurInput.value = CURRENCIES.gbp.toFixed(5);
//
// Associer un évènement qui correspond au changement de la valeur du champ
// eurgbpInput.addEventListener("input", () => {
// Récupérer la valeur saisir by user
// const eur = eurgbpInput.value;
// console.log(eur)
//  Conertir la valeur en nombre
// const eurNomber = parseFloat(eur);
//  console.log(eur, typeof eur)
// console.log(eurNomber, typeof eurNomber)
// Calcul new conversion
// const newConversion = eurNomber * CURRENCIES.gbp;
// console.log(newConversion)
// Converting new number in text with 5 digits
// const newConversionTexte = newConversion.toFixed(5);

// console.log(newConversionTexte)
// Update input
// gbpeurInput.value = newConversionTexte;
// });
//
// gbpeurInput.addEventListener("input", () => {
// Récupérer la valeur saisir by user
// const gbp = gbpeurInput.value;
// console.log(eur)
// Conertir la valeur en nombre
// const gbpNomber = parseFloat(gbp);
// console.log(eur, typeof eur)
// console.log(eurNomber, typeof eurNomber)
// Calcul new conversion
// const newConversion = gbpNomber / CURRENCIES.gbp;
//
// console.log(newConversion);
// Converting new number in text with 5 digits
// const newConversionTexte = newConversion.toFixed(5);
//
// console.log(newConversionTexte);
// Update input
// eurgbpInput.value = newConversionTexte;
//
