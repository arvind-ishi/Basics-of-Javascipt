const forInloop = [1,2,3,4,5,6];


for (const key of forInloop) {

   // console.log(key);
}

const stringCharecterPrint = "hello world";

for (const item of stringCharecterPrint) {

   // console.log(`the carecter is ${item} `);
    
    
}







//<<<<<<<<<<<<<<<<<<<<<<map>>>>>>>>>>>>>>>>>>>>>>>>>>



const maps = new Map();

maps.set('java' , "javascript")
maps.set('js',"nodejs");
maps.set('c++',"c progaming");
maps.set('php', "python");
maps.set('php', "python");

///console.log(maps);



for (const [key ,value] of maps) {

    //console.log(`the key of ${key} and the value is ${value}`);


}



const myobject = {
    c :"claguage ",
    js : "javasript",
    php : "hypertech prosess ",


}

for (const key in myobject) {
    //console.log(myobject[key]);  
//console.log(`the key is : =  ${key} and the string is : = ${myobject[key]}`)
    
}




//////////this is the array in the key and values how its 


const programing = [ "html", "ruby", "c++", "php", "golang", "java", "javascript"];

for (const key in programing) {
    //console.log(key);  
    //console.log(programing[key])
  
 // console.log(`the key of the array in the for in loop is : = ${key}
  // and the value in the array is : == ${programing[key]}`)
}



////the high ar oder function in javascript >>>>>>>>>>>>>

//>>>>>>>>>>this array in the function used by call by function value <<<<<<<<
// call back funtion 

const coding  = ["html", "ruby", "c++", "php", "golang", "java", "javascript"]


//  coding.forEach( function (key){
    // console.log(key);
//  } )


// coding.forEach ( (val)=>{
    // console.log(val);
// })



// function printMe (item){
    // console.log(item)
// }
// 
// coding.forEach(printMe)


coding.forEach( (val ,index, array)=>{

    //console.log(` the val is : = ${val} and the := ${index} ane arr is ${array}`)
   // console.log(val , index , array)
});




/////////////the objects in the javascript in the way of it >>>>>>>>>>>>>>>>>


const myCoding = [

    {
        programingname : "javascript",
        programiongfilename : "js"
    },

    {
        programingname : "python",
        programiongfilename : "python"
    },
    {
        programingname : "java",
        programiongfilename : "jv"
    },
    {
        programingname : "c++language",
        programiongfilename : "cpp"
    },
    {
        programingname : "ruby",
        programiongfilename : "ruby"
    },

];



myCoding.forEach((val)=>{
    //console.log(val.programingname)
console.log(`the val is : ${val.programingname} and the ${val.programiongfilename}`)
    //console.log(val.programiongfilename)
})
//console.log(myCoding)