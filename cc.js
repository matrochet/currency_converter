import { loadData } from "./loading.js";

const CURRENCIES = loadData();

//Collect all the properties of the CURRENCIES object
const currenciesList = Object.keys(CURRENCIES);

console.log(currenciesList);

// For each currency

// Personalize the HTML code of line

const fragment = document.createDocumentFragment();

for (const currency of currenciesList) {
  const rates = CURRENCIES[currency].toFixed(5)

  const divElement = document.createElement("div");
  divElement.innerHTML = `
  <div class="devise">
    <input type="number" id="eur-${currency}" step="0.00001" value="1" />
    <span>EUR</span>
    <span class="egal">------------</span>
    <input type="number" id="${currency}-eur" step="0.00001" value="${rates}" />
    <span>${currency.toUpperCase()}</span>
  </div>`;

  fragment.appendChild(divElement);
}

// Collect the container
const container = document.getElementById("container");

// Add the fragment to the container
container.appendChild(fragment)

const changeValue = e => {
  // Collect the field who has raised the event
  const input = e.target
  const identifiant = input.id

  // Identifiant: "eur-usd" for example

  // Récupérer la valeur saisit by user
  const valueText = input.value;
  // console.log(eur)

  //  Convertir la valeur en nombre
  const valueNomber = parseFloat(valueText);
  // console.log(eur, typeof eur)
  // console.log(eurNomber, typeof eurNomber)
  
  // Collect the source and destination
  const currenciesParts = identifiant.split('-')

  // Source = 1st element of the array 
  const currencySource = currenciesParts[0]

  // Destination = 2nd element of the array 
  const currencyDestination = currenciesParts[1]
  
  // console.log(currencySource, currencyDestination)

  // Collect the rate 
  let newConversion

  // Case 1: The modified value is the value in EUR
  if (currencySource === 'eur') {
    const rates = CURRENCIES[currencyDestination]
      // Calcul new conversion  
    newConversion = valueNomber * rates
  } else {
    // Case 2: The modified value is the currency value
    const rates = CURRENCIES[currencySource]
      // Calcul new conversion  
    newConversion = valueNomber / rates
  }

  console.log(newConversion) 

  // Converting new number in text with 5 digits
  const newConversionTexte = newConversion.toFixed(5); 

  // Update input of destination 
  // Inverse de l'identifiant: "eur-usd" > "usd-eur"
  
  // Reverse the originals parts of Id 
  const currenciesPartsReverse = currenciesParts.reverse()
 
  console.log(currenciesPartsReverse)

  // Generate Id of destination from parts
  const identifiantDestination = currenciesPartsReverse.join('-')

  // Colect input 
  const inputDestination = document.getElementById(identifiantDestination)
  inputDestination = newConversionTexte;
  }

// Collect all text input
const inputs = document.querySelectorAll('input')

for (const champ of inputs) {
  champ.addEventListener('input', changeValue)

  console.log(champ)
}

// Associer un évènement qui correspond au changement de la valeur du champ
// eurgbpInput.addEventListener("input", () => {

