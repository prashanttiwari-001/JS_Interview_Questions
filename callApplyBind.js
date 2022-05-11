let person1 ={
    name:"sanchit",
    age:25,
    // f:function(){
    //     console.log(this.name + " is ", this.age + " year old ");
    // }
}


let person2 ={
    name:"john",
    age:20,
    // f:function(){
    //     console.log(this.name + " is ", this.age + " year old ");
    // }
}
let showDetails = function(city, car){
    // console.log(this.name + " is ", this.age + " year old ");
   console.log(`${this.name} is ${this.age} year old he lives in ${city} and he drives ${car}`);
}
// person1.f();
// function borrowing
// person1.f.call(person2);


// showDetails.call(person1,"delhi" , "BMW");
// showDetails.call(person2, "Mumbai" , "Audi");

// apply
// showDetails.apply(person1,['delhi','bmw'])
// showDetails.apply(person2,['mumbai','audi'])

// bind
let showDetailsBind = showDetails.bind(person1,'delhi','audi');
showDetailsBind();