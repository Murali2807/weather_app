const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const URL =
    "http://api.weatherapi.com/v1/forecast.json?key=813f527e6bcb4116ab7144457221706&q=" +
    latitude +
    "," +
    longitude +
    "&days=1&aqi=no&alerts=no";
  request({ url: URL, json: true }, (err, { body }) => {
    if (err) {
      callback("Not found the page", undefined);
    } else if (body.error) {
      callback("No data search Another codes ...", undefined);
    } else {
      callback(
        undefined,
        `Country : ${body.location.country} , Condition : ${body.forecast.forecastday[0].day.condition.text} , Average Temp : ${body.forecast.forecastday[0].day.avgtemp_c}`
      );
    }
  });
};
module.exports = forecast;
