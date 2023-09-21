const nums = [1,2,3];

const mynums = nums.reduce(function( acc, currentvalue){
    console.log(`the ${acc} and ${currentvalue}`);

    return acc + currentvalue
},0);

console.log(mynums);


///>>>>>>>>shoping card <<<<<<


const shopingcard = [

    {
        corsename : "javascript corse",
        price : 2359

    },
    {
        corsename : "javascript corse",
        price : 9119
    },
    {
        corsename : "javascript corse",
        price : 9999
    },
    {
        corsename : "javascript corse",
        price : 999
    },
    {
        corsename : "javascript corse",
        price : 99
    },
];


const totalprice = shopingcard.reduce((acc,item) =>{
  return acc + item.price ;

},0);

console.log(totalprice)