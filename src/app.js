const request = require("request");
const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");
// const URL =
//   "http://api.weatherapi.com/v1/current.json?key=813f527e6bcb4116ab7144457221706&q=India&aqi=yes";

// request({ url: URL, json: true }, (err, res) => {
//   console.log(res.body);
//   //   console.log(`${JSON.stringify(res.body)}`);
//   //   const weatherData = JSON.parse(res.body);
//   //   console.log(weatherData);
// });

// const MAPBOX_URL =
// "https://api.mapbox.com/geocoding/v5/mapbox.places/India.json?access_token=pk.eyJ1IjoiZG1tdXJhbGkiLCJhIjoiY2w0aW5lbmxrMDRuaTNkcWZ0eGNmbWVnYSJ9.EBYr9PlxtuyJaXRWQ5Vd8Q&limit=1";

// request({ url: MAPBOX_URL, json: true }, (err, res) => {
//   //   console.log(JSON.stringify(res.body));
//   if (err) {
//     console.log("Unable to Find the page");
//   } else if (res.body.features.length === 0) {
//     console.log("No data");
//   } else {
//     console.log(
//       `longitude : ${res?.body?.features[0]?.center[0]} latitude : ${res?.body?.features[0]?.center[1]}`
//     );
//   }
// });

geocode("india", (err, { latitude, longitude, location }) => {
  if (err) return console.log(err);

  forecast(latitude, longitude, (err, forecastData) => {
    if (err) return console.log(err);
    console.log("forecast : ", forecastData);
  });
});
