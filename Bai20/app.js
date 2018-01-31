// API và end point, json

var http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, {'Content-type': 'application/json'});

    var obj = {
        firstName : "Hoan",
        lastName  : 'Mai'
    };


    // convert json to string 
    res.end(JSON.stringify(obj));
}).listen(1337, '127.0.0.1');