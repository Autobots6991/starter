const { default: axios } = require("axios");
const express = require("express");
const fs = require("fs");
const api = express();
const HOST = "localhost";
const PORT = 88;
api.listen(PORT, () => console.log(`Server Running at port ${PORT}!`));
const APIkey = "5506b39b271a1511c0ede0116acf841f";
let cityname = "Hanoi";
const unit = "metric";
axios
  .get(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}&units=${unit}`
  )
  .then((response) =>
    fs.writeFileSync(
      "./weatherdata.json",
      JSON.stringify(response.data, null, 2),
      (err) => {
        if (err) throw err;
        else {
          console.log("The file is updated with the given data");
        }
      }
    )
  );
api.get("/", (req, res) => {
  res.send("Welcome to weather data API dit me may Nhan!");
});
const wedata = require("./weatherdata.json");
api.get("/weather", (req, res) => {
  res.send(wedata);
});
