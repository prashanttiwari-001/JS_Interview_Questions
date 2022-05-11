// First Class Citizen
// In JavaScript function are treated as a variable 
// that's why function are first class citizen

// 1. kisi function ko ek variable ke andar store kra sakte hai

// let  MyFunction = function fn(){
//     console.log("I am stored in a variable");
// }
// MyFunction();

// 2. kisi function ko ek function ke andar as a parameter pass kr sakte hai

// function big(param){
//     console.log("I am big",param);
//     param();
//     return "ssssss";

// }
// function small(){
//     console.log("I am smaller");
// }
// let rVal = big(small);
// console.log("rVal", rVal)

// 3. ek function ke andar dusra function return kra sakte hai

// function outer(){
//     console.log("I am Outer");
//     return function inner(){
//         console.log("I am inner");
//     }
// }
// let rVal = outer()
// console.log("rVal", rVal);
// rVal();