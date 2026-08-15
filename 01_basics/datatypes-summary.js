// #PRIMITIVE DATATYPES(they are all call by value)

//7 categories : String, Number, Boolean, null, undefined, Symbol, BigInt

const score= 100;
const scoreValue=100.6;
//console.log(typeof score)
//console.log(typeof scoreValue)

//symbol
const id= Symbol('123')
const anotherId = Symbol('123')
//console.log(id === anotherId)//false



// #REFERENCE DATATYPES/NON PRIMITIVE 

//3 categories : Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; //array

let myObj={
    name: "palak",
    age: 22
}

//function
const myFunction = function(){
    console.log("Hello World!");
}
myFunction()
/*JavaScript is a dynamically typed language. 
This means that the type of a variable is determined at runtime (when the code is executed), rather than at compile time (before the program runs)*/



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack (Primitive)-copy milta hai, Heap (Non-Primitive)-reference

let myYoutubename= "palakcom"
let anotherName= myYoutubename

anotherName="chai aur code";
console.log(anotherName)
console.log(myYoutubename)




let user={
    email: "palak@gmail.com",
    upi: "user1@ybl"
}

let userTwo=user

userTwo.email = "hitesh@google.com"
console.log(user.email)
console.log(userTwo.email)