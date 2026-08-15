
function sayMyName(){
    console.log("H")
    console.log("T")
    console.log("I")
    console.log("E")
    console.log("S")
    console.log("H")
}

//sayMyName()

//function addTwoNumbers(number1, number2){//here number1 and number2 are parameters
//    console.log(number1+number2)
//}

function addTwoNumbers(number1, number2){//here number1 and number2 are parameters
    //let result=number1+number2
    //return result
    return number1+number2
}
const result=addTwoNumbers(3,5)//here 3 and 5 are arguments
//console.log(result)

function loginUserMessage(username="sam"){
    if(!username){//same as username===undefined
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Palak"))
//console.log(loginUserMessage("Palak"))


function calculateCartPrice(val1,val2,...num1){//rest operator
    return num1
}
//console.log(calculateCartPrice(200,300,400,2000))

const user={
    username:"Palak",
    prices:199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
//handleObject(user)
handleObject({
    username:"Sam",
    price:399
})

const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1];
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]))