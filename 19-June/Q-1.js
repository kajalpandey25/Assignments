// Q.1 Build a Server Using Http Module NodeJS with api endpoints for Getting Products Data
// " ‘/’G →G send msg as “Welcome to Men & Women Dummy Data”;
// " G‘/men’ →G send 10 products data of men;
// " ‘/women’G →G send 10 products data of women;
// " ‘/other’G → send response as page not found;
// Hint: You can use any data, send data in json format

const http = require('http');

const menProducts = [
    { id: 1, name: 'shirt', price: 500 },
    { id: 2, name: 'T-Shirt', price: 300 }
]

const womenProducts = [
    { id: 11, name: 'Jeans', price: 950 },
    { id: 12, name: 'Dupatta', price: 300 }
]

const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'Application/json');

    if (req.url === "/") {
        res.statusCode = 200;
        res.end(JSON.stringify({message: 'Welcome to Men & Women Dummy Data'}))
    } else if (req.url === '/men') {
        res.statusCode = 200;
        res.end(JSON.stringify(menProducts));
    } else if (req.url === '/women') {
        res.statusCode = 200;
        res.end(JSON.stringify(womenProducts))
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ Error: 'Page Not found' }))
    }
})

const port = 3000;
server.listen(port, () => {
    console.log(`The server is running on http://localhost:${port}`);
});