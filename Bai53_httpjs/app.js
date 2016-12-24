var http  = require("http");
var fs = require("fs");

var server = http.createServer(function (rep, res) {
   res.writeHead(200, {'Content-Type': 'text/html'});
    var html = fs.readFileSync(__dirname + "/index.html", "utf8");

    res.end(html);
});

server.listen(8000, "127.0.0.1");