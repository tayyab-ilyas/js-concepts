console.log("tayyab is coding");

setTimeout( ()=>{
    console.log("tayyab has taken a break for 1s")
}, 1000);

console.log("tayyab is back from break");

//does not work as expected due to async nature line 1 and 7 get executed first