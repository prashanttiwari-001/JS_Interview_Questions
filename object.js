
// let cap ={
//     name:"steve",
//     "last name" :"Roger",
//     isAvengers:false,
//     movies:["winter soldiers", "civil war"],
//     address:{
//         city:"manhatan",
//         state:"new york",
//     },
//     age:45,
// }
// console.log(cap[23]);
// for(let key in cap){
//     console.log(key, " : ", cap[key]);
// }
// console.log(cap);
// // dot notation
// console.log(cap.name);
// console.log(cap.age);
// console.log(cap.address.city);
// console.log(cap.movies[1]);

// console.log(cap["age"]);
// console.log(cap["name"]);
// console.log(cap["last name"]);
// console.log(cap["key"]);
// console.log(cap.key);
//set
// cap.friends=["peter", "tony", "bruce"];
// update
// cap.isAvengers = true;
// delete
// delete cap["last name"];

// traverse
// for(let key in cap){
//     console.log(key," : ", cap[key]);
// }
// cap.movies.splice(1,1);
// console.log(cap);


// fnContainer();
// var fnContainer = function(){
//     console.log("I am an expression");
// }
//  fnContainer();


// fn();
// function fn(){
//     console.log("I am Chutiya");
// }
// fn();

//  console.log("line number 1",varName);
//  var varName = 10;
//  function b(){
//     console.log("line number 8", varName);
// }
//  console.log("line number 3",varName);
//  function fn(){
//     console.log("line number 5",varName);
//     var varName = 20;

//     b();
//     console.log("line number 12",varName);
// }
// fn();
// var varName = 10;
// console.log(varName);
// function b(){
//     console.log(varName);
// }
// b();

// var
// hoisting
// console.log("line number 1", varName);
// declare
// var varName;
// console.log("line number 2", varName);
// // assingn
// varName = 10;
// console.log("line number 3", varName);
// // reassign
// varName = 20;
// console.log("line number 4", varName);
// // redeclare
// var varName;
// console.log("line number 5", varName);

// function fn(){
//     console.log(a);
//     var a = 10;
//     console.log(a);
//     if(a==10){
//         var a = 20;
//         console.log(a);
//     }
//     console.log(a);
// }
// fn();

// var a = 10;
// console.log("line number 1",a);
// function fn(){
//     console.log("line number 2",a);
//     var a = 20;
//     a++;
//     console.log("line number 3",a);
//     if(a){
//         var a = 30;
//         a++;
//         console.log("line number 4",a);
//     }
//     console.log("line number 5",a);
// }
// fn();
// console.log("line number 6",a);

// Temporal Dead Zone
// console.log("hello");
// console.log(a);
// let a = 10;
// console.log(a);


// block scope
// let fruits ="apple";
// console.log(fruits);
// {
//     // console.log(fruits);  TDZ
//     let fruits;
//     console.log(fruits);
//     fruits="orange";
//     {
//         console.log(fruits);  
//     }
//     console.log(fruits);
// }
// console.log(fruits);

// legal shadowing
// var fruits ="apple";
// console.log(fruits);
// {

//     let fruits = "orange";
//     console.log(fruits);
// }
// console.log(fruits);


// illegal shadowing
// let fruits ="apple";
// console.log(fruits);
// {

//     var fruits = "orange";
//     console.log(fruits);
// }
// console.log(fruits);


// array
// let arr = [1,2,3,4,5];
// arr.myProp = "hello";
// arr.print = function(){
//     console.log("hello from array");
// }
// // console.log(arr);
// for(let key in arr){
//     console.log(key," : ",arr[key]);
// }
// arr[95]=100;
// console.log(arr[23]);

// const arr =[1,2,3,4,5]
// arr.shift();
// console.log(arr);



