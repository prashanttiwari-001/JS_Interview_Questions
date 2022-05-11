// map, filter, reduce

// Map
//  let myArr = [1,2,3,4,5];
//  let newArr = myArr.map(function(x){
//      return x+x;
//  })
//  console.log(myArr);
//  console.log(newArr);

// or
// using map through arrow function
// let myArr = [1,2,3,4,5];
// let mapArr = myArr.map((x)=>x*x);
// console.log(mapArr);

// filter
// let myArr = [1,2,3,4,5];
// let filterArr = myArr.filter(function(x){
//     return x%2==0;
// })
// console.log(filterArr);

// or
// using filter through arrow function
// let myArr = [1,2,3,4,5];
// let filterArr = myArr.filter((x)=>x%2===0);
// console.log(filterArr);

// Reduce
// let myArr  = [1,2,3,4,5];
// let reduceArr = myArr.reduce(function(accumulator,x){
//     return accumulator+x;
// },0)
// console.log(reduceArr);

// Polyfills -> khud ka function likhna
// Polyfills of Map, Filter and reduce

// custom Map
// let myArr =[1,2,3,4,5];
// function myPolyfillMap(arr,cb){
//     let newArr=[];
//     for(let i=0; i<arr.length; i++){
//         newArr.push(cb(arr[i]));
//     }
//     return newArr;
// }
// function square(x){
//     return x*x;
// }
// console.log(myPolyfillMap(myArr,square));

// custom filter
// let myArr = [1,2,3,4,5,6,7,8,9];
// function myPolyfillFilter(arr,cb){
//     let filterArr =[];
//     for(let i=0; i<arr.length; i++){
//         if(cb(arr[i])){
//             filterArr.push(arr[i]);
//         }
//     }
//     return filterArr;
// }

// function isEven(x){
//     if(x%2==0){
//         return x;
//     }
// }
// console.log(myPolyfillFilter(myArr,isEven));

// custom reduce
// let myArr=[1,2,3,4,5];
// function myPolyfillReduce(arr,acc,cb){
//     // let reducedArr =[];
//     for(let i=0; i<arr.length; i++){
//         acc = cb(acc,arr[i]);
//     }
//     return acc;
// }
// function myReduce(a,x){
//     return a + x;
// }
// console.log(myPolyfillReduce(myArr,0,myReduce));


