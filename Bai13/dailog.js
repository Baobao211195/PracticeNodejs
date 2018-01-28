// class trong es6 để viết lại ứng dụng kế thừa emmiter
'use-strict'
// Tạo một đối tượng kế thừa EventEmitter
var EventEmitter = require('events');

class Dailog extends EventEmitter {
    constructor () {
        super() // để sử dụng tất cả những gì chả có giống java
        this.message = "Hello world";
    }

    sayHello (data) {
        console.log(`${this.message}: ${data}`);
        this.emit("Hello", data);    //vì dùng supper
    }
}
module.exports = Dailog; // export class Dailog