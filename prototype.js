// Array.prototype.myFunction = function(){
//     console.log(this);
// }
// let arr = [1,2,4,7];
// arr.myFunction();

// using prototype polyfill in map
// Array.prototype.myFunction = function(cb){
//     let newArr =[];
//     for(let i=0; i<this.length; i++){
//         newArr.push(cb(this[i]));
//     }
//     return newArr;
// }

// function myPrototypeFilter(x){
//     return x*x;
// }
// let arr =[1,2,4,7];
// let mappedArr = arr.myFunction(myPrototypeFilter);
// console.log(mappedArr);

// using prototype polyfill in filter
// Array.prototype.myFunction = function(cb){
//     let newArr =[];
//     for(let i=0; i<this.length; i++){
//         if(cb(this[i])){
//             newArr.push(this[i]);
//         }
//     }
//     return newArr;
// }
// function filterArr(x){
//     return x%2==0;
// }
// let arr =[1,2,3,4,5,6,7,8,9];
// let modifiedArr = arr.myFunction(filterArr);
// console.log(modifiedArr);

