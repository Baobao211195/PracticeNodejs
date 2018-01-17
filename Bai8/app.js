// Event và Event Emitter trong node js

// 1 : system event (trong C++ core của node js) => from libUv (ko thể kiểm soát-> sử lý kết quả )
// 2 : custom event (js core của nodejs, từ event emitter có thể hiểu được, customize)

// Một vài kỹ thuật thao tác vs object và function

//1. đối với object
var obj = {
    sayHello : "hello"
}

console.log(obj.sayHello);
console.log(obj['sayHello']);

var prop = 'sayHello';

console.log(obj[prop]);

//2. đối với function và array

var arr = [];
arr.push(function() {
    console.log("Hello node js 1");
});
arr.push(function() {
    console.log("Hello node js 2");
});
arr.push(function() {
    console.log("Hello node js 3");
});

arr[0]();
arr[1]();
arr[2]();

// in ra các funtion
arr.forEach(function(element) {
 element();   
});