const accountId = 144553
let accountEmail = "spalak0204@gmail.com"
var accountPassword = "12345"
accountCity = "Lucknow" //not a good way but memory will still be reserved for this
let accountState;


//accountId=2 //not allowed as const keyword cannot be reassigned


accountEmail = "nityanand1909@gmail.com"
accountPassword = "2121"
accountCity = "Sasaram"

//console.log(accountId);

/*
prefer not to use "var" bcoz of issue in block and functional scope
We can or cannot use semicolon in javascript, totally depends on us
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*variables can be declared in 2 ways:
1. using var keyword
2. using let keyword*/

//use const and let in javascript, var is old and has some issues with block and functional scope. It is better to avoid using var.