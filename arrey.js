//console.log("hello world");

let   arr = [22,44,55,433,33,34,234,];

//console.log(arr);


//console.log(arr[2]);



const avi = new  Array(1,2,3,4,5,6,7,8,9,0);

//console.log(avi[5]);


//console.log(avi);

avi.push(43);

console.log(avi);


avi.pop();

console.log(avi); // last element remove 


avi.unshift(4);

//console.log(avi);// first value print 


avi.shift();
//console.log(avi);// frist value not print 



console.log(arr.includes(33));//true

console.log(arr.includes(335));//flase


console.log(arr.indexOf(33));//4


console.log(arr.indexOf(24));//-1




let brr = [0,1,2,3,4,5];


let newbrr =brr.join();
console.log(brr);//[0,1,2,3,4,5]

console.log(typeof(newbrr));// type is string convert and 0,1,2,3,4,5




//???????????????????????????????????? the interwive the slice and splice quatinon ????????????????????????????????????



let acc = [0,1,2,3,4,5];

console.log(acc.slice(1,3));// 1,2 print 

console.log("a", acc);// [0,1,2,3,4,5];

console.log(acc.splice(1,3));//[1,2,3];

console.log("b",acc)//b [0,4,5];
/// the difference is the part can remove form the array and give you in splice and slice is in the copy the element and give you 





