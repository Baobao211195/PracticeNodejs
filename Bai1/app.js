console.log(' Call một module node js');

//
// require('./hello.js'); // tồn tại cùng cấp vs app.js

// call 1 function in a module

var sayHello = require('./hello.js');

// sayHello();
sayHello.sayThank();
sayHello.sayHello();
sayHello.sayGoodBye('van kem');

sayHello.sayHelloParam('pham van oanh');