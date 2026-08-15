const name="Palak"
const repoCount=50

//console.log(name+repoCount+"Value");    //OUTDATED SYNTAX

//console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`); //string interpolation

const gameName= new String('hitesh-hc-com-palak-nisha-singh')
console.log(gameName)
console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))

console.log(gameName.indexOf('a'))

//const newString=gameName.substring(0,4)//last value jo daali hai vo include nahi horahi hai  DOESNOT OBEY NEGATIVE VALUES
//console.log(newString)

const anotherString= gameName.slice(-8,4)//here we can give negative values also then it will start reverse
//console.log(anotherString)

const newstring1="    hitesh    "
//console.log(newstring1)
//console.log(newstring1.trim())

const url="https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'))


console.log(url.includes('hitesh'))
console.log(url.includes('palak'))

//string ko split kardiya on the basis of -
console.log(gameName.split('-'))