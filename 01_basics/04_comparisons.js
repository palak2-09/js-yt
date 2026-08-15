/*console.log(2>1)
console.log(2>=1)
console.log(2>=8)*/

//console.log("2">1)
//console.log("02">1)

//console.log(null==0)
//console.log(null>0)
//console.log(null>=0)

/*THE REASON IS THAT AN EQUALITY CHECK(==) AND COMPARISONS > < >= <= WORK DIFFERENTLY
COMPARISONS CONVERT NULL TO A NUMBER, TREATING IT AS 0
THEREFORE, null>0 IS FALSE, null>=0 IS TRUE, AND null==0 IS FALSE BECAUSE NULL IS ONLY EQUAL TO UNDEFINED IN JAVASCRIPT*/


/*console.log(undefined==0)
console.log(undefined>=0)
console.log(undefined>0)*/

//=== strict check - checks datatype also
console.log("2"===2)
console.log(2===2)
