function myName(){
    console.log("a");
    console.log("r");
    console.log("v");
    console.log("i");
    console.log("n");
    console.log("d");

}


//myName();

function myresult(num1 ,num2){

   //console.log(num1+num2)

return num1 +num2;


}


//myresult(3,4)
//console.log(myresult(3,5));




//////this also 

function AddTwoNumbers(number1 ,number2){
    let  result = number1 + number2;
    return result;

}

let result = AddTwoNumbers(5,6);

//console.log("result :", result);




/////////////>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>the user log in method <<<<<<<<<<<<<<<<<<<<<<<<<<<<


//function LogInPage(username)
function LogInPage(username = "arvind"){
// if(username === undefined)
if (!username){
    console.log("please enter the username ");
  return
}
    return `the ${username} user logged in `;

}

//console.log(LogInPage("jadhav"));





/////>>>>>>>>>>>>>>>>the functions in objects and array >>>>>>>>>>>>>>>>>> pasing all the finding >>>>> 


function calculateCartPrice(val1, val2 , ...numu1){

return numu1;


}

//console.log(calculateCartPrice(200))

console.log(calculateCartPrice(100,200 ,340 ,2000))


//>>>>>>>>>>>>>>>>object in funbction in twoi type representetion <>>>>>>>>>>>

//const user = {
 //   username : "arvind ",
  //  price : "999"
//}

function loggCardPrice(typeuser){
   return  `this is the username  ${typeuser.username} and the price ${typeuser.price}`;

}

//console.log(loggCardPrice(user));

console.log(loggCardPrice({
    username : "sam",
    price : "333"
}));



// >>>>>>>>>>>>>>>>>array in functions >>>>>>>>>>>>>>>>>>>>>>

//const getArray = [100,200,445,666,666];


function returnSecondValue(onArray){

    //return onArray[2];
    console.log(onArray[2])
}

//console.log(returnSecondValue(getArray))

returnSecondValue([100,200,300,400,45]);
