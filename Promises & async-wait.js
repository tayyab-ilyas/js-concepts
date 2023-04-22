//let fs = require("fs");

//fs.readFile("file.txt", "utf-8", (err,data)=>{
  //  console.log(err,data);
//}) //reads file.txt with utf-8 format and as soon as read is successful call fxn (err,data)=>{ console.log(err,data);}

//console.log("end");

//runs the subsequent lines while the file is being read

let fs =require('fs/promises'); //we use promises when we have multiple callbacks makes our code more readable

let a = fs.readFile("file.txt", "utf-8");
a.then((data)=>{
    console.log(data);
})
console.log("end");