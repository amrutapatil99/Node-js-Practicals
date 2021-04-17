//Task = To create separate files for orders list = orderList.js, for functions=functions.js and integrate in app.js

const myFunctions = require('./functions.js');

var sumOfAllOrders = myFunctions.calculateTotal();
console.log("Total :"+sumOfAllOrders);

var max = myFunctions.maxAmount();
console.log("max :"+max);

var min = myFunctions.minAmount();
console.log("min :"+min);

var avg = myFunctions.avgAmount();
console.log("avg :"+avg);