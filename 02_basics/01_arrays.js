//array
//javascript arrays are resizable

//javascript array copy operations create "SHALLOW COPIES"
//shallow copy of an object is a copy whose properties share the same references as those of the source from which the copy was made 

//deep copy of an object is a copy whose properties do not share the same references as those of the source object from which the copy was made


const myArr=[0, 1, 2, 3, 4, 5]
const myHeros=["Shaktiman", "naagraj"]

const myArr2= new Array(1, 2, 3, 4)
//console.log(myArr[3])


//Array methods

myArr.push(6)


myArr.push(7)
myArr.pop()

//console.log(myArr)

//myArr.unshift(8)//it will get added at the start of the array

//myArr.shift()//works like pop we donot give any value to it and it will remove the first element of the array
//console.log(myArr)

/*console.log(myArr.includes(9))
console.log(myArr.indexOf(2))
console.log(myArr.indexOf(19))//output will be -1 as it doesnot exist in the array*/

const newArr= myArr.join()
//console.log(myArr)

//join hmare array ko bind bhi krdeta hai and usse string m bhi convert krdeta hai
//console.log(newArr)

//console.log(typeof myArr);
//console.log(typeof newArr)


//slice,  splice
console.log("A", myArr)
//slice mei jo last range hai vo include nahi hoti hai
const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B", myArr);

//splice mei last range bhi include hoti h
//splice wala portion original array se remove hojata hai ie "SPLICE CHANGES ORIGINAL ARRAY BUT SLICE DOESNOT"
const myn2 = myArr.splice(1,3)

console.log(myn2)
console.log("C", myArr);

