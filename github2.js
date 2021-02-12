const fetch = require ("node-fetch");
const location = 'lagos'
const url = `https://api.github.com/search/users?q=location:${location}`;

fetch(url)
.then(res => res.json())
.then(data => console.log(data))


