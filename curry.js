// using bind method for making curring
// function add(a,b){
//     console.log(a+b);
// }
// let addWith2 = add.bind(this,2);
// addWith2(4); 

// using closures for making curry
// function calculateVolume(length) {
//     return function (breadth) {
//         return function (height) {
//             return length * breadth * height;
//         }
//     }
// }
// console.log(calculateVolume(4)(5)(6));

// using arrow function for making curry
// function multiply(x) {
//     return (y)=>{
//         return (z)=>{
//             return x * y * z;
//         }
//     }
// }
// console.log(multiply(1)(2)(3))


