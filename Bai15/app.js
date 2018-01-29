// làm việc với file trong node

var fs = require('fs');

// đọc file đồng bộ

// var content = fs.readFileSync(__dirname + '/file.txt');
// console.log(content.length);


// đọc file không đồng bộ

fs.readFile(__dirname + '/file.txt', 'utf8', (err, data) => {
    if(err) {
        console.log(`Have error ${err}`);
    } else {
        console.log(data.length);
    }
});