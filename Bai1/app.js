console.log(' Module và các khai niệm liên quan');
// Module : đoạn mã có thể tái sử dụng được 
// trong node : implement common js --> tạo ra module -> module.export and call require('path of module name')
// First class function : hàm trong ngôn ngữ đó được dùng như 1 object (object ko phải là object trong OOP mà là 1 function)
// Js là first class function 
    // + đóng vai trò là tham số của hàm
    // + đóng vai trò là giá trị trả về từ một hàm
    // + có thể gán cho 1 biến.

    function sayHello() {
        console.log('hello node');
    }
    sayHello();

    // first class function
    function sayGoodBye(func) {
        func();
    }

    sayGoodBye(sayHello);

    // function expression
    var sayHelloVar  = function () {
        console.log('Xin chao  node js');
    }

   sayHelloVar();


   sayGoodBye(function () {
       console.log('goodbye node js');
   });
