//var c=300
//block scope
let a=300;
if(true){
    let a=10
    const b=20
    //console.log("Inner:",a)

}

//console.log(a)
//console.log(b)

function one(){
    const username="palak"

    function two(){
        const website="youtube"
        console.log(username);
    }
    //console.log(website);//error
    two()
}
//one()

if(true){
    const username="palak"
    if(username==="palak"){
        const website=" youtube"
        //console.log(username+website);
    }
    //console.log(website);//error
}
//console.log(username);//error


//++++++++++++++++++++++interesting+++++++++++++++++++++++

//function
console.log(addone(5))
function addone(num){
    return num+1;
}


//function expression
//addtwo(5); //error will come (hoisting)
const addtwo=function(num){
    return num+2;
}
