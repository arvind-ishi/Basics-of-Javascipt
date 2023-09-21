
// const myCoding = ["java ", "javasript","cPP", "php", "ruby"];
// 
// 
// const value = myCoding.forEach((item)=>{
    // console.log(item);
// 
// })
// 
// console.log(value);
// 



const numbers = [1,2,3,4,5,6,8,9,10];

//  const filtervalue = numbers.filter((num)=>{
    // return (num <= 7);
//   });



const newNums = [];

numbers.forEach((num)=>{

    if(num > 4){
        newNums.push(num);

    }

})
console.log(newNums);
