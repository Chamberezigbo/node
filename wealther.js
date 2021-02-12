'use script'

const fetch = require("node-fetch");
const city = 'aba'
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9de588c6173bf1be1d183b246ac26edb`;

fetch(url)
.then(res => res.json())
.then(data => console.log(data))