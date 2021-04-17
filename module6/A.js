//Task = to print "new object created" after adding new object
const obj1 = require('./B');
const obj2 = require('./B');

console.log(obj1);      //[Function: Order]
var object1 = new obj1(1,"Laptop",1,40000);
console.log(object1.toString());

var object2 = new obj2(2,"earPhones",2,2000);
console.log(object2.toString());
