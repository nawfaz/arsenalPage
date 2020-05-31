const fetch = require("node-fetch");

const fetchUser = async () => {
  return await fetch(
    "https://api.covid19api.com/dayone/country/mauritius/status/confirmed/live"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

console.log("Début");
fetchUser();
console.log("Fin");
