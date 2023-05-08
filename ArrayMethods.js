let num = [1,2,3,4,5,6,7]

// convert to string

let a = num.toString()
console.log(a, typeof a)


//join method

let b= num.join("-")//can place anything here to add as a separator between array elements
console.log(b)

//pop method -- removes last element from an array
num.pop()
console.log(num)
//return the popped element
let popped=num.pop()
console.log(num,popped)

//push method 
let pushed = num.push(99)
console.log(num)

//shift method --removes an element from the beginning
let shifted = num.shift()
console.log(num,shifted)

//unshift method --adds an element at the beginning
let unshifted = num.unshift(77)
console.log(num, unshifted)

//delete method -- does not change the length
delete num[0]
console.log(num)

//concat method -- combine two arrays
let num2= [2,6,8,10,12,14]
let newArray = num.concat(num2) //can add more than 2 arrays (x,y,z....)
console.log(newArray)

//sort method -- sorts alphabetically 
let num3 = [2,8,9,11,1,7,113,1000000]
console.log(num3.sort())

//sort in ascending order using compare fxn
let compare =(a,b)=>{
    return a-b
}
console.log(num3.sort(compare))

//splice
num.splice(2,3,22,23) //from index 2 onwards remove three elements and add 22,23
console.log(num)

//slice
let num4 = [5,6,90,21,33,45]
num4.slice(2)
console.log(num4) //does not change the original array

let newArr = num4.slice(2)
console.log(newArr)