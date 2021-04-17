const myorders = require('./MyOrders.js');

myorders.forEach( (obj) =>{
    "use strict";
    console.log(obj.name+ ' '+obj.totalAmount);
} )