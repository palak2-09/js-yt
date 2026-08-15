//Dates

/*let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)  //date is of object type*/

//let myCreatedDate = new Date(2023, 0, 23)//js mei month  0 se start hota h
//let myCreatedDate = new Date(2023, 0, 23, 5, 3)


let myCreatedDate = new Date("2023-01-20")
//console.log(myCreatedDate.toLocaleString())


let myTimeStamp= Date.now();
/*console.log(myTimeStamp)//gives time in milliseconds
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))//to get the time in seconds*/

let newDate= new Date()
console.log(newDate);
console.log(newDate.getDate())
console.log(newDate.getFullYear())
console.log(newDate.getDay())
console.log(newDate.getMonth()+1)//end user confuse na ho as js mei 0 se start hota hai

console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}`)//string interpolation

/*newDate.toLocaleString('default', {
    weekday: "long",
    timeZone:timeZone,
})*/