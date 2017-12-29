/*
 Create hello.js module

**/
console.log("create hello.js module");

// var sayHello = function() {
//     console.log("call 1 function in a module");
// }

var objecFunc = {
    sayHello :() => console.log('pham van oanh '),
    sayHelloParam :(params) => console.log(`pham van oanh + ${params}`) ,
    sayGoodBye: function sayGoodBy(params) {
        console.log('Say goodbye' + params);
    },

    sayThank : function sayThank () {
        console.log('Say thank you');
    }
}

// export to other module can be used
// module.exports = sayHello;
module.exports = objecFunc;