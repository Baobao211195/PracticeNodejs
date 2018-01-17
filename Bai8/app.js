var Emmiter = require('./emitter');

var emitter  = new Emmiter();

emitter.on('bad', function() {
    console.log("Có một môn điểm kém");
});
emitter.on('bad', function() {
    console.log("Có một môn điểm kém, cần thông tin tới học sinh");
});

// khai báo một bảng điểm

var scores = [10, 4];

for (let s of scores) {
    if(s < 5) {
        console.log("Điểm thấp", s);

        emitter.emit("bad");
    }
}