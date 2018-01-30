// làm việc với stream để đọc và ghi file 


var fs = require('fs');

var readable = fs.createReadStream(
    __dirname + '/file.txt',  // tham số thứ nhất đường dẫn file name
    {                         // tham số thứ 2 là một object miêu tả từng mảnh dữ liệu mỗi lần đọc          
        encoding: 'utf8',     // có định dàng là utf8 , và mỗi mảnh có kích thức là 1024 byte
        highWaterMark: 1024          // byte
    }

);

// vì thằng fs cũng là một prototype của Event emitter nên có thể sử dụng hàm on
readable.on('data', (chunk) => {
    console.log(chunk.length);  // output sẽ là 3 mảnh
                                // 1024
                                // 1024
                                // 72

});


// write data vào 1 file sử dụng stream 

var writatble = fs.createWriteStream(__dirname + '/file2.txt') // ghi vào một file 

readable.on('data', (chunk) => {
    console.log(chunk.length);  
    writatble.write(chunk)  // ghi từng mảnh data lần nượt vào file
});
