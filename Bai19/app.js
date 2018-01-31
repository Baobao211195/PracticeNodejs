// tạo 1 webserve trả về dữ liệu html

var http = require('http');

var fs = require('fs');

http.createServer((req, res) => {
    res.writeHead(200, 
        {'Content-type': 'text/html'}
    );

    // đọc file html đồng bộ
    var html = fs.readFileSync(__dirname + '/index.html', 'utf8');

    // write data là user vào trang html
    var user = 'Pham van oanh';
    html = html.replace("{user}", user);
    
    // trả về html
    res.end(html);

}).listen(1337, '127.0.0.1');