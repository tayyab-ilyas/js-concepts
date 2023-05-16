let arr = [3,5,6,7,8]


//forEach loop

arr.forEach((element)=>{
    console.log(element*element)
})

//Array.from -- converts an object into array

let name= "Tayyab"
let arrName = Array.from(name)
console.log(arrName)

//for..of

for(let i of arr){
    console.log(i)
}

/*this is shortcut of 
    for(let i=0;i<arr.lenght;i++){
    console.log(arr[i])
}*/

//for..in --gives keys

for(let i in arr){
    console.log(i)
}
