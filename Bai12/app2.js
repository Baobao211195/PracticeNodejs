// sử dụng call và apply để thay đổi đối tượng thực thi khi kế thừa từ Event Emitter
var util = require('util');

function Person() {
    this.firstName = "Hoa";
    this.lastName = "Mai";
}

Person.prototype.sayHello = function () {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
}

// Person.prototype.sayHello2 = function () {

//     console.log(`Hello2 ${this.firstName} ${this.lastName}`);
// }

// Person.prototype.sayGoodBye = () => console.log(`Goodbye ${this.firstName} ${this.lastName}`);

// tạo một đối tượng student để thừa kế person dùng module utils
function Student() {
    // Person.apply(this);  /// kiểu gọi hàm super() trong java
    Person.call(this);  /// kiểu gọi hàm super() trong java
    this.id = '123';  // this lúc này Student bao gồm (firstName, lastName, id)
}

// var ps = new Person();

// ps.sayHello(); // => Hello Hoa Mai this là một đối tượng person
// ps.sayHello2();
// ps.sayGoodBye(); 


// kế thừa Person
util.inherits(Student, Person);


var sv = new Student();

sv.sayHello(); ///=> Hello undefined undefined // this lúc này là Student chứ không phải là prototype của nó
// sv.sayHello2();
// sv.sayGoodBye();
