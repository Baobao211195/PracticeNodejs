// sự khác nhau giữa exports và module.exports
var module1 = require("./module1.js") // module.exports đã trỏ tới một object ở 1 vùng nhớ khác
var module1 = require("./module2.js") // vẫn giữ được nguyên