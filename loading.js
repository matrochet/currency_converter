const data = `<gesmes:Envelope xmlns:gesmes="http://www.gesmes.org/xml/2002-08-01" 
xmlns="http://www.ecb.int/vocabulary/2002-08-01/eurofxref">
<gesmes:subject>Reference rates</gesmes:subject>
<gesmes:Sender>
    <gesmes:name>European Central Bank</gesmes:name>
</gesmes:Sender>
<Cube>
    <Cube time='2024-04-19'>
        <Cube currency='USD' rate='1.0653'/>
        <Cube currency='JPY' rate='164.68'/>
        <Cube currency='BGN' rate='1.9558'/>
        <Cube currency='CZK' rate='25.267'/>
        <Cube currency='DKK' rate='7.4622'/>
        <Cube currency='GBP' rate='0.85620'/>
        <Cube currency='HUF' rate='395.30'/>
        <Cube currency='PLN' rate='4.3300'/>
        <Cube currency='RON' rate='4.9764'/>
        <Cube currency='SEK' rate='11.6640'/>
        <Cube currency='CHF' rate='0.9680'/>
        <Cube currency='ISK' rate='150.30'/>
        <Cube currency='NOK' rate='11.7650'/>
        <Cube currency='TRY' rate='34.7304'/>
        <Cube currency='AUD' rate='1.6622'/>
        <Cube currency='BRL' rate='5.6165'/>
        <Cube currency='CAD' rate='1.4666'/>
        <Cube currency='CNY' rate='7.7139'/>
        <Cube currency='HKD' rate='8.3443'/>
        <Cube currency='IDR' rate='17325.08'/>
        <Cube currency='ILS' rate='4.0181'/>
        <Cube currency='INR' rate='88.9228'/>
        <Cube currency='KRW' rate='1469.09'/>
        <Cube currency='MXN' rate='18.4819'/>
        <Cube currency='MYR' rate='5.0959'/>
        <Cube currency='NZD' rate='1.8105'/>
        <Cube currency='PHP' rate='61.373'/>
        <Cube currency='SGD' rate='1.4510'/>
        <Cube currency='THB' rate='39.288'/>
        <Cube currency='ZAR' rate='20.4793'/>
    </Cube>
</Cube>
</gesmes:Envelope>
`;

export const loadData = () => {
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
