console.log(' Các khái niệm về object');

var person = {
    name: 'oanh',
    age: '26',
    address: 'Ha nam',

    sayHello: (name) => console.log(`xin chao ${name}`),

    printName : function () {
        console.log('Hello, ' + this.name);
    }
};

console.log(person.address);

person.sayHello(person.name);
person.printName();

// find all properties 

var helloModule = require('./hello.js')
helloModule.sayHello();
helloModule.sayHello('pham van oanh');
helloModule.sayThank();