//.length, index starts from 0
let name ="tayyab";
console.log(name.length)

//.toUpperCase, .toLowerCase
console.log(name.toUpperCase())

//.slice
console.log(name.slice(0,3)) // 0,1,2
console.log(name.slice(2))// from 2 onwards includes everything

//.replace
console.log(name.replace("tay","zoy"))

//.concat
let friend="sean"
console.log(name.concat(" is a friend of ", friend))//connects strings

//.trim
let f2="     deShawn      "
console.log(f2.trim()) //reomves the spaces 
