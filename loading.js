// Adress of rates from BCE in XML format
// const adress = 'https://open.er-api.com/v6/latest/USD'
const adress = "currencies.json";

export const loadData = async () => {
  const data = await fetch(adress).then((response) => {
    if (response.ok === false) {
      return Promise.reject("Error in collect data");
    }

    return response.json();
  });

  const CURRENCIES = {};
  const time = data["time_last_update_utc"];
  console.log(time);

  const timeElement = document.getElementById("time");
  timeElement.textContent = `Dates of rates: ${time}`;

  for (const [currency, rate] of Object.entries(data.rates)) {
    const monnaie = currency.toLowerCase();
    CURRENCIES[monnaie] = rate;
  }
  // console.log(CURRENCIES);

  return CURRENCIES;
};
