const Balance = 10;


if(Balance >100){

    console.log(" less than");

}
else {
    console.log(" greater than");

}

//////////////////////>>>>>>>>>>>>>>>swich statement >>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
let month = 3;


switch(month) {

    case 1 : console.log("janavary")
    break;

    case 2 : console.log("feburwary");

    break;
    case 3 : console.log("march")
    break;

    case 4 : console.log("april")
    break;
    default : console.log(" this is not the mounth ")
    break;

}


const objectnew = {};

if(Object.keys(objectnew).length === 0){
    console.log("the object is the empty");
    
}