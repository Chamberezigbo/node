
const fetch = require("node-fetch");
const name = 'chamberezigbo'
const url = `https://api.github.com/users/${name}`;


fetch(url)
.then(res => res.json())
.then(data => console.log(data))




// fetch('https://api.github.com/users/chamber')
// .then(res => res.json())
// .then(res => {
//    res.data.map(user => {
//       console.log(`${user.login}: ${user.id} ${user.name}`);
//    });
// });