//ES6 import require
//using export we can make property/fn/obj public
export function greet(){
    console.log("greet() funtion");
}

export function sayHi(){
    console.log("sayHi() function");
}

export function f3(){
    console.log("f3() function");
}

let v = {x:'1'};
export {v};