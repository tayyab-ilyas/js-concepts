//map
let a=[1,3,6,7,9];

let a1 = a.map((value)=>{
    return value+3;
})

console.log(a,a1)

//filter
let a2 = a.filter((value)=>{
    return value>3;
})

console.log(a,a2)

//reduce
let a3=a.reduce((value1, value2)=>{
    return value1 + value2;
})
console.log(a, a3);
// 1,3,6,7,9
// 4,6,7,9
//10,7,9
//17,9
//26