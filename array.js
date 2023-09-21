let marval_Heros = ["hiteh", "ratan", "shivay"];

let dc_Heros = ["ganesh" , "ram", "sita"];



//let newHeros = marval_Heros.push(dc_Heros);

//console.log(newHeros);

//console.log(marval_Heros)

let newArr = marval_Heros.concat(dc_Heros);

console.log(newArr);




//// the spred operetor used in the mosty simple 

let new_Arr_Heros = [...marval_Heros,...dc_Heros];

console.log(new_Arr_Heros);



let  newAnotherArr = [1,2,3[3,4,5[345,66,77,88]]];


let realArr = newAnotherArr.flat(Infinity);

console.log(realArr);



//?????????????????????????array what is find and convert ???????????



console.log(Array.isArray("hitesh"));

console.log(Array.from("hitish"));// convert to array 


console.log(Array.from({name  :"histesh"}))// the returns the [] enpty array 


let name1 = 100;

let name2 = 200;

let name3 = 300;

console.log(Array.of(name1,name2,name3));// [100,200,300]


