//singleton 
//object.create ye hai constructor method

//literals se singleton nhi bnta hai constructor se bnta h

//object literals

const mySym=Symbol("key1")
const JsUser={
    name: "Palak" , 
    "full name":"Palak Singh",
    [mySym]:"mykey1", //yha p name ko by default system string ki trh hi process krta hai
    age:20,
    location:"Chennai",
    email: "spalak0204@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
/*console.log(JsUser.email)
console.log(JsUser["full name"])
console.log(JsUser["email"])
console.log( JsUser[mySym])*/

JsUser.email="palak@google.com"//value change hojayega'
//console.log(JsUser.email)

//freeze makes an object immutable and no changes could be made into it
//Object.freeze(JsUser)
JsUser.email="palak@microsoft.com"

//console.log(JsUser)


JsUser.greeting=function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo=function(){
    console.log(`Hello JS user,${this.name}`);
}

console.log(JsUser.greeting())

console.log(JsUser.greetingTwo())