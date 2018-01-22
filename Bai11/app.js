// call va apply
// dùng để thay đổi  context của từ khóa this
var obj = {
    firsName: "oanhpv",
    sayHello: function () {
        console.log(`Xin chao ${this.firsName}`);
    }
}

obj.sayHello(); // gọi 1 cách thông thường

// dùng call để thay đổi context của từ khóa this của biến obj
// truyển vào một object mới
var obj1 = {
    firsName: "van kem"
}
obj.sayHello.call(obj1)  // lúc này this.firstName sẽ là obj1.firstName (context của từ khóa this đã chuyển thành this của obj1)


// dùng apply
var obj2 = {
    firsName : "ha ha ha"
}
obj.sayHello.apply(obj2) // lúc này this.firstName sẽ là obj2.firstName (context của từ khóa this đã chuyển thành this của obj2)

// sự khác nhau của call và apply
//1. tạo 1 function mới của obj có tham số truyền vào
obj.sayGoodBye = function(param1, param2) {
    console.log(`Xin chao ${this.firsName} + param1 is ${param1} and param2 is ${param2}`);
}

obj.sayGoodBye.call(obj1, "xin dep", "hoc thien")  // vs call, param truyền vào theo danh sách

obj.sayGoodBye.apply(obj2, ["beokhoe", "beo dep"]) // vs apply, param truyền vào là 1 mảng danh sách