//for of

//array specific loops

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]
//for of loop syntax
// for(const iterator of object){
    
// }

// for(const num of arr){
//     console.log(num);
// }


// const greetings="Hello world!"
// for(const greet of greetings){
//     console.log(`Each char is ${greet}`);
// }


//**Maps**- values unique hoti hai and jis order mei enter kiya hai waise hi rehti hai
const map=new Map()
map.set("IN","India")
map.set("USA","United States of America")
map.set('FR','France')
map.set("IN","India")
//console.log(map);

for(const [key,value] of map){
    //console.log(key,':-',value);
}


const myObject = {
    game1:'NFS',
    game2:'Spiderman'
}

// for(const [key,value] of myObject){
//     console.log(key,':-',value);
// }

