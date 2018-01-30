// làm việc với pipe kết hợp giữa các stream với nhau
// đầu ra của stream này là đầu vào của stream khác

// sử  dụng pipe trong trường hợp 
// mình phải xử lý 1 chuỗi các action đói với một đối tượng như file

var fs = require('fs');

var zlip = require('zlib');  // dùng để nén file

var readable = fs.createReadStream(__dirname + '/file.txt' , {
    encoding: 'utf8',
    highWaterMark: '1024'
});

var writable = fs.createWriteStream(__dirname + '/file2.txt');

// sử dụng pipe để nghi vào file 
readable.pipe(writable);

// sử dụng nhiều pipe khác nhau liên tiếp
readable.pipe(zlip.createGzip())                                  // tạo một đối tượng gZip
        .pipe(fs.createWriteStream(__dirname + '/file3.txt.gz')); // tạo một file zip
