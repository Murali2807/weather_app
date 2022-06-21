const request = require("request");

const geocode = (address, callback) => {
  const MAPBOX_URL =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/+" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiZG1tdXJhbGkiLCJhIjoiY2w0aW5lbmxrMDRuaTNkcWZ0eGNmbWVnYSJ9.EBYr9PlxtuyJaXRWQ5Vd8Q&limit=1";
  request({ url: MAPBOX_URL, json: true }, (err, { body }) => {
    if (err) {
      callback("Unable to Find the page", undefined);
    } else if (body.features.length === 0) {
      callback("No data", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;
