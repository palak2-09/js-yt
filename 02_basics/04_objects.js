//const tinderUser= new Object()//singleton object hai 

const tinderUser={}//non singleton object hai

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

//console.log(tinderUser)

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"palak",
            lastname:"singh"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1, obj2, obj4)
const obj3={...obj1,...obj2,...obj4}//spread operator
//console.log(obj3)
//console.log(obj1)


const users=[
    {
        id:1,
        email:"h@gmail.com"
    }
]
users[0].email
/*console.log(tinderUser);

console.log(Object.keys(tinderUser))//it will give us the keys of the object in an array
console.log(Object.values(tinderUser))//it will give us the values of the object in an array
console.log(Object.entries(tinderUser))*/


//console.log(tinderUser.hasOwnProperty("isLoggedIn"))//it will check if the property is present in the object or not and return true or false


//destructuring of objects
const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
//course.courseInstructor

const {courseInstructor:inst}=course
console.log(inst)//it will give us the value of the property courseInstructor

/*{
    "name":"palak",
    "coursename":"js in hindi",
    "price":"free"
}*/
