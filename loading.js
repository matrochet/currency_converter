// Adress of rates from BCE in XML format
const adress = 'https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml'

export const loadData = async () => {
  const data = await fetch(adress)
    .then(response => {
      if (response.ok === false) {
        return Promise.reject('Error in collect data')
      }

      return response.text()
    })

  console.log(data)

  const CURRENCIES = {};

  // Extraire data contenues dans les balises
  // <Cube></Cube>

  const BALISE_CUBE = "<Cube>";
  const positionCubeEntree = data.indexOf(BALISE_CUBE);

  // console.log(positionCubeEntree)

  const BALISE_CUBE_FIN = "</Cube>";
  const positionCubeSortie = data.lastIndexOf(BALISE_CUBE_FIN);

  // console.log(positionCubeSortie)

  const Taille_Balise_Fin = BALISE_CUBE_FIN.length;
  const dataXML = data.substring(
    positionCubeEntree,
    positionCubeSortie + Taille_Balise_Fin
  );

  // console.log(dataXML)

  // Manipuler XML data

  // Créer un DomParser

  const parser = new DOMParser();
  const mineTypeXML = "text/xml";

  // Converting text XML on DocumentXML

  const documentXML = parser.parseFromString(dataXML, mineTypeXML);

  console.log(documentXML);

  // Browse our XML document

  // Collect the first Cube tag

  const cube1 = documentXML.firstElementChild;

  console.log(cube1);

  // Collect the second Cube tag embedded in the first

  const cube2 = cube1.firstElementChild;

  console.log(cube2);
  console.log(cube2.attributes);

  // Collect the attributes

  const cubeAttributes = cube2.attributes;

  // Collect the time attribute

  const attrTime = cubeAttributes.getNamedItem("time");

  console.log(attrTime);

  const time = attrTime.value;

  console.log(time);

  // Shows date on screen

  const timeElement = document.getElementById("time");
  timeElement.textContent = `Dates of rates: ${time}`;

  // Browse cube2 and collect all elements (cube)

  const elements = cube2.children;

  console.log(elements);

  // To each element

  for (const element of elements) {
    // Collect currency and rate attribute

    const attributs = element.attributes;
    const currencyText = attributs.getNamedItem("currency").value;
    const rateText = attributs.getNamedItem("rate").value;

    const monnaie = currencyText.toLowerCase();
    const taux = parseFloat(rateText);

    // Add money at gloabl object

    CURRENCIES[monnaie] = taux;
  }
  // console.log(CURRENCIES);

  return CURRENCIES;
};
