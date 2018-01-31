// tạo 1 webserve sử dụng nodejs

var http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, 
        {'Content-type': 'text/plain'}
    );

    res.end('Hello web from nodejs.org');
}).listen(1337, '127.0.0.1');