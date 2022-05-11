// In non strict mode or we can say that in normal mode

// this keyword in node with non strict mode
// when console globally
// console.log(this);// return empty object
 

// when this console in function
// function showThis(){
//     console.log(this);
// }
// showThis(); // return global object

// when this console in Object in function
// let obj ={
//     name:"steven",
//     f:function(){
//         console.log(this);
//     }
   
// }
// obj.f(); // returns object itself

// when this console in Object in function in function
// let obj ={
//     name:"steven",
//     f:function(){
//        function g(){
//            console.log(this);
//        }
//        g();
//     }
   
// }
// obj.f(); // returns global object


