const http = require('http');
const fs = require('fs');

const HOST = "localhost";
const PORT = 3000;

let server = http.createServer((req, res) => {
    
    let stream;

    switch (req.url) {
        case '/build.js':
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            stream = fs.createReadStream('../build/build.js').pipe(res);
            break;
        case '/favicon.ico':
            res.writeHead(200, { 'Content-Type': 'image' });
            stream = fs.createReadStream('../build/favicon.ico').pipe(res);
            break;
        default:
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            stream = fs.createReadStream('../build/index.html').pipe(res);
            break;
    }
})

server.listen(PORT, HOST, () => {
    console.log(`Server started: http://${HOST}:${PORT}`);
})