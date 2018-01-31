// tạo 1 webserve trả về dữ liệu html sử dụng stream để đọc file
// nhằm tăng hiệu năng sử dụng pipe

var http = require('http');

var fs = require('fs');

http.createServer((req, res) => {
    res.writeHead(200, 
        {'Content-type': 'text/html'}
    );

    // đọc file html không đồng bộ
    fs.createReadStream(__dirname + '/index.html').pipe(res);
    
}).listen(1337, '127.0.0.1');