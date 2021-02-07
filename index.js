const express = require('express');

const app = express();

app.get('/', (req, res) =>{
   res.send('Hello World!');
});

app.get('/user',(req, res) =>{
   res.send('Chamberlain Ezigbo');
})

app.listen(4000, () => {
   console.log('server running on port 4000');
})