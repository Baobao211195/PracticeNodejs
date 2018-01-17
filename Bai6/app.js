// sử dụng các module có sẵn trong node js
var util = require("util"); // sử dụng module util

var name = "pham van oanh";

var msg = util.format("hello , %s", name);

console.log(util.isArray([]));
console.log(util.isArray(new Array()));
console.log(util.isArray({}));
util.log(msg);

var url = require('url');  // sử dụng module url

console.log(url.parse('https://tinhte.vn/threads/ban-co-biet-tai-sao-chi-moi-co-1-nguoi-duoc-chua-khoi-hiv.2760813/'));

