const user={
    username:"palak",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
//user.welcomeMessage()
//user.username="sam"
//user.welcomeMessage()

//console.log(this)

//this talks about the current context

/*function chai(){
    let username="palak";
    console.log(this.username);
}
chai()*/



/*const chai=function (){
    let username="palak";
    console.log(this.username);
}*/


const chai=()=>{
    let username="palak";
    console.log(this);
}
//chai();


//basic arrow function
/*const addtwo=(num1,num2)=>{
    return num1+num2;
}
console.log(addtwo(3,4))*/



//implicit return
//const addtwo=(num1,num2)=>  num1+num2;
//const addtwo=(num1,num2)=>  (num1+num2);

const addtwo=(num1,num2)=>  ({username:"hitesh"})


console.log(addtwo(3,4))

