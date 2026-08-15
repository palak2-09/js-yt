const score=400
//console.log(score)

const balance= new Number(100)
//console.log(balance)//yaha ka output thoda alag aaya hai bcoz yha p specially define kiya hua h ki number hai 

//console.log(balance.toString().length);

//console.log(balance.toFixed(2));
//console.log(typeof(balance))


const otherNumber=23.8966
//console.log(otherNumber.toPrecision(2))

const hundreds=1000000
//console.log(hundreds.toLocaleString('en-IN'));//isse commas lge hue aate hai toh dekhna easy hojata hai and commas US standard se hote h




//++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++
//math library comes by default with javascript

/*console.log(Math);
console.log(Math.abs(-55768));//negative numbher ko positive kar deta hai whereas positive remains as it is
console.log(Math.round(4.122234432787))
console.log(Math.ceil(4.2))//top value choose krta hai mtlb zara sa bhi 4 se upar hua toh 5 lelega
console.log(Math.floor(4.3))//ye decimal k aage wali hi likh deta hai
console.log(Math.min(2,6,1,8,0,56,23))
console.log(Math.max(2,6,1,8,0,56,23))*/

console.log(Math.random())//Math.random() ki value hmesha aayegi 0 and 1 ke beech mei
console.log((Math.floor(Math.random()*100))+ 1)//value shift hogi 2 places 



const min=10
const max=20
console.log(Math.floor(Math.random() * (max - min + 1) ) + min)