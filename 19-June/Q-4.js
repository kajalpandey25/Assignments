// Q.4 Build a Server that Generater Random Number Using Epress
//  ‘/random’ → Send random number in response {random:10}

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let randomNumber = Math.floor(Math.random() * 100 ) + 1
res.json({RandomNumber: randomNumber})
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server is Running on http://localhost:${port}`);
})