const express = require("express");
const hbs = require("hbs");
const path = require("path");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();
// console.log(path.join(__dirname));
// console.log(path.join(__dirname, "../public"));

const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicPath));
app.get("", (req, res) => {
  res.render("index", {
    title: "hello world",
    name: "murali"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    company: "Murali Timbers",
    age: 21,
    location: "Pudur"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    company: "Timbers",
    age: 20,
    location: "Pudur vlkm"
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "ERROR HERE"
    });
  }
  // res.send({
  //   weather: {
  //     location: "India",
  //     forecast: "show",
  //     search: req.query.search
  //   }
  // });
  const address = req.query.search;
  geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return res.send(error);
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send(error);
      }

      res.send(
        `${JSON.stringify({
          forecast: forecastData,
          location,
          address: req.query.search
        })}`
      );
    });
  });
});

app.get("*", (req, res) => {
  res.send("404 Page Not Found");
});

app.listen(3000, () => {
  console.log("server started .... PORT -- 3000");
});
