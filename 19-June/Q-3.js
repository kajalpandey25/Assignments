// Q.3_Create a Basic Server with Different Routes using Expresl
// " `/`G G → send response as {msg:`I am homepage`}
// " `/about`G → send response as {msg:`I am about page`}
// " `/contact ` → send response as {emai::`suppor#@pwskills.com`}

const express = require('express');
const app = express();

app.get('/' , (req, res) => {
   res.json({msg: 'I am HomePage'})
})

app.get('/about' , (req, res) => {
   res.json({msg: 'I am AboutPage'})
})

app.get('/contact' , (req, res) => {
   res.json({email: 'suppor#@pwskills.com'})
})

const port = 3000;
app.listen(port, () => {
   console.log(`Server is Running on http://localhost:${port}`);
})