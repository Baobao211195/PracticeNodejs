/**
 * routing
 */
var http  = require("http");
var fs = require("fs");

var server = http.createServer(function (rep, res) {
    // chỉ ra req đến từ url nào
    if (rep.url === "/" || rep.url === "/index.html") {
        fs.createReadStream (__dirname + "/index.html").pipe(res);
    } else if (rep.url === "/api") {
        res.writeHead(200, {'Content-Type': 'application/json'});
        var obj = {
            firstName : "Hoa",
            lastName: "Van kem"
        }
        res.end(JSON.stringify(obj)); // convert object to json format.
    } else {
        res.writeHead(404);
        res.end();
    }

});

// khi server khoi dong thanh cong thì thực hiện hàm calll back
server.listen(8000, "127.0.0.1" , function () {
    console.log("Server listening on localhost");
});
