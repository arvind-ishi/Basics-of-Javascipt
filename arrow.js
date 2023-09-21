// const user = {
// 
    // username : "arvind",
// 
    // price : 666,
// 
    // welcomeWebsite :function (){
        // console.log(`${this.username} , is used to the welcome website `)
// 
        // console.log(this)
    // }
    //  
// }
// 
// console.log(user)
// user.username = "avi"
//user.welcomeWebsite()



// function chai(){
//   let username =  "arvind";
//   console.log(this.username)
// 
// }
// 
// chai()
// 


///  arrow function >>>>>>>>>>>>>>>>>>>>>>> arrow all about <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// const addTwo = (num1 , num2) =>{
// 
    // return num1 + num2;
// 
// }


//const addTwo = (num1 ,num2) => (num1 + num2);
//const addTwo = (num1 ,num2) => num1 + num2;
// const addTwo = (num1 ,num2) => ({ username: "arvind"});
// 
// console.log(addTwo(9,5));

////////>>>>>>>>>>>>>>>>>>>>>>>iife <<<<<<<<<<Emmitdiately  invoked function exptession <<<<<<<<<<<



(function chai (name )  {
    console.log(` this is the name  ${name} `)
})("arvind");


( (username)=>{
    console.log(`this is the ${username }`)
})("ari")