// spread and destructuring


//Spread -- allows us to quickly copy all parts of an existing array or object into another array or object.

arr = [1,2,4]

function avg(a,b,c){
    return a+b+c/3
}
// let a = avg(...arr)
// let a = [2,2,2,...arr]
//let a2 = [6,9,9]
//let a = [...a2, arr]
//console.log(a) 

let obj1 = {
    name1:"Tayyab",
    job:"dev",
    age:19
}
let obj2 ={
    favlang:"javascript",
    favframework:"react"
}
// let obj3={}
//obj3.favlang="python"
//copy rest of the properties accordingly....

//let obj3 ={...obj1, ...obj2, favlang:"python"};
//console.log(obj3)

let{name1, job, age}= obj1;
console.log(name1, age,  job) //destructuring