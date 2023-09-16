// Q.2 Create a Backend For Counter Web App with Api Endpoint for Managing Counter Using Expresl
// " ‘/’G →G send counter data as {counter:counter}
// " `/increment` → increment counter by 1 and send in response :atest data as {counter:counter}
// " `/decrement` → decrement counter by 1 and send in response :atest data as {counter:counter}
// Note: Using Express is Mandatory for this Question

const express = require('express');
const app = express();
let counter = 0;

app.get('/', (req, res) => {
    res.json({counter: counter});
});

app.get('/increment', (req, res) => {
    counter++;
    res.json({counter: counter});
});

app.get('/decrement', (req, res) => {
    counter--;
    res.json({counter: counter});
});

const port = 3000;
app.listen(port, () => {
    console.log(`The server is running on http://localhost:${port}`);
});