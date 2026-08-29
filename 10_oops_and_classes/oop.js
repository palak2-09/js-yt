const user = {
    username: "palak",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from db")
        // console.log(`username:${this.username}`)
        console.log(this)
    }
}

// console.log(user["username"]);
// console.log(user.getUserDetails());
// console.log(this)


function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn


    this.greetings = function() {
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const userOne = new User("palak", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor)
    // console.log(userTwo)


// new keyword use krte hi ek empty object create hota hai jisko instance bolte hai
// constructor func call hota h due to new keyword
//this keyword mei jo bhi arguments likhe h sab inject hojate hai
//mil jate h function k andar