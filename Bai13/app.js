// cơ bản về es6
'use-strict' // phải sử dụng từ khóa này

class Person {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName  = lastName;
    }
    // định nghĩa các method của class
    sayHello () {
        console.log(`Hello es6 ${this.firstName} ${this.lastName}`);
    } 
}

var hoa = new Person("Hoa", "Mai");
hoa.sayHello();

var mai = new Person("Mai", "Phuong");
mai.sayHello();

console.log(hoa.__proto__);
console.log(mai.__proto__);
console.log(hoa.__proto__ === mai.__proto__);

var Dailog = require('./app2');

var dailog = new Dailog();

dailog.on("Hello", function (data) {
    console.log(`Có một lời chào mới ${data}`);
});

dailog.sayHello("Pham van oanh"); // call function of dailog object


