const { json } = require('express');
const express = require('express');

const app = express();

const data = '[{"name":"champer", "age":"18", "city":"aba"}, {"name":"pre", "age":"18", "city":"aba"}, {"name":"anita", "age":"18", "city":"ph"}]'



app.get('/', (req, res) =>{
   res.send('Hello World!');
});

app.get('/user',(req, res) =>{
   const result = JSON.parse(data);
   result.forEach(element => {
      if (element.city == "aba") {
         console.log(element)
      }
   });
   res.send(result);
})

app.listen(4000, () => {
   console.log('server running on port 4000');
})

let person = {
   firstName:"chamber",
   hello: function() {
      console.log(this.firstName)
   }
}