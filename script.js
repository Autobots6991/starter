const { default: axios } = require("axios");
const express = require("express");
const fs = require("fs");
const api = express();
const HOST = "localhost";
const PORT = 88;
api.listen(PORT, () => console.log(`Server Running at port ${PORT}!`));

let wedata;

api.get("/", (req, res) => {
  res.send("Welcome to weather data API dit me may Nhana!");
});
api.get("/weather", (req, res) => {
  const APIkey = "5506b39b271a1511c0ede0116acf841f";
  let cityname = "London";
  const unit = "metric";
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}&units=${unit}`
    )
    .then((response) => {
      wedata = response.data;
      return wedata;
    });
  res.send(wedata);
});
