import { loadData } from "./loading.js";

const CURRENCIES = loadData();

// console.log(CURRENCIES)

// Récupérer les deux champs
const eurgbpInput = document.getElementById("input-eurgbp");
const gbpeurInput = document.getElementById("input-gbpeur");

// Initialize the rate show at screen
gbpeurInput.value = CURRENCIES.gbp.toFixed(5);

// Associer un évènement qui correspond au changement de la valeur du champ
eurgbpInput.addEventListener("input", () => {
  // Récupérer la valeur saisir by user
  const eur = eurgbpInput.value;

  // console.log(eur)

  // Conertir la valeur en nombre
  const eurNomber = parseFloat(eur);

  // console.log(eur, typeof eur)
  // console.log(eurNomber, typeof eurNomber)

  // Calcul new conversion
  const newConversion = eurNomber * CURRENCIES.gbp;

  // console.log(newConversion)

  // Converting new number in text with 5 digits
  const newConversionTexte = newConversion.toFixed(5);
  //
  // console.log(newConversionTexte)

  // Update input
  gbpeurInput.value = newConversionTexte;
});

gbpeurInput.addEventListener("input", () => {
  // Récupérer la valeur saisir by user
  const gbp = gbpeurInput.value;

  // console.log(eur)

  // Conertir la valeur en nombre
  const gbpNomber = parseFloat(gbp);

  // console.log(eur, typeof eur)
  // console.log(eurNomber, typeof eurNomber)

  // Calcul new conversion
  const newConversion = gbpNomber / CURRENCIES.gbp;

  console.log(newConversion);

  // Converting new number in text with 5 digits
  const newConversionTexte = newConversion.toFixed(5);

  console.log(newConversionTexte);

  // Update input
  eurgbpInput.value = newConversionTexte;
});
