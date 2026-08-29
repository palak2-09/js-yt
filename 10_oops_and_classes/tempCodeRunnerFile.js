const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        console.log("Got user details from db")
    }
}
console.log(user.username)