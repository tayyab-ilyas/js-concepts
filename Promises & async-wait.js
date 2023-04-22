//let fs = require("fs");

//fs.readFile("file.txt", "utf-8", (err,data)=>{
  //  console.log(err,data);
//}) //reads file.txt with utf-8 format and as soon as read is successful call fxn (err,data)=>{ console.log(err,data);}

//console.log("end");

//runs the subsequent lines while the file is being read

/* 
let fs =require('fs/promises'); //we use promises when we have multiple callbacks makes our code more readable

let a = fs.readFile("file.txt", "utf-8");
a.then((data)=>{
    console.log(data);
})
console.log("end");

*/

//async-await

let fs=require("fs/promises");

const readThree=async(file1,file2,file3)=>{
    let a1=fs.readFile(file1,"utf-8");
    let a2=fs.readFile(file2,"utf-8");
    let a3=fs.readFile(file3,"utf-8");
    let c1 = await a1;
    console.log(c1)
    let c2 = await a2;
    console.log(c2)
    let c3 = await a3;
    console.log(c3)
}

readThree("file1.txt","file2.txt","file3.txt");

console.log("lol");
