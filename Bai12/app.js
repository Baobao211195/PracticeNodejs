// sử dụng call và apply để thay đổi đối tượng thực thi khi kế thừa từ Event Emitter

// Tạo một đối tượng kế thừa EventEmitter
var EventEmitter = require('events');
var util = require('util');

//  tạo một Object hộp thoại
function Dailog() {
    this.message = "Hello of dailog";
}
// kế thừa những gì có sẵn trong event emitter
util.inherits(Dailog, EventEmitter);  //Dailog kết thừa Event emitter

// Mở rộng dailog
Dailog.prototype.sayHello = function () {
    console.log(this.message);
    this.emit("Oanhpv")  // do Dailog kế thừa EventEmitter nên nó sử dụng được hàm  emmit event has name Oanhpv
}

// tạo một đối tượng dailog
var dailog = new Dailog();

dailog.on("Oanhpv", function () { // lắng nghe sự kiện vs name là Oanhv
    console.log("Có một lời chào từ sự kiện có name là oanhpv");
});

dailog.sayHello();

// trường hợp hai có tham số khi emit data
Dailog.prototype.sayBye = function (data) {
    this.emit("NameEvent", data);  // Tên event và data truyền đi
}

var dailog2 = new Dailog();

dailog2.on("NameEvent", function(data) {  // lắng nghe dựa theo tên event và function xử lý datacls
    console.log(`Data emit ra is ${data}`);
});

dailog2.sayBye("Pham van oanh");