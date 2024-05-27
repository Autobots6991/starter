"use strict";

let APIkey = "5506b39b271a1511c0ede0116acf841f";
let cityname = prompt(`Nhập tên thành phố:`);
let unit = "metric";
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}&units=${unit}`
)
  .then((temp) => {
    return temp.json();
  })
  .then((data) => {
    console.log(data);
  });
console.log("");
