const fetch = require("node-fetch");

const fetchUser = async () => {
  return await fetch(
    "https://api.covid19api.com/dayone/country/mauritius/status/confirmed/live"
  )
    .then((res) => res.json())
    .then((data) => {
      const info = [...data];

      console.log(info[info.length - 1].Country);
    });
};

console.log("Début");
fetchUser();
console.log("Fin");
