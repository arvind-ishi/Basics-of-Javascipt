
let jsUser = {
    see : "garbage 0",
    constact : "avi",
    hospital : 33,
    unick : true ,
   
}

jsUser.greeting = function(){
    console.log("hellow world")
}


jsUser.greetingtwo = function(){
    console.log(`this is the contact ${this.constact} ok `)
}

console.log(jsUser.greeting());


console.log(jsUser.greetingtwo());