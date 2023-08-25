const nume = "arvind";
const counter = 50;

console.log(nume + counter + " value");

console.log(`the name is ${nume.toUpperCase()} and the counter number is ${counter}`);

const strongHuman =  new String('hites-hh-c');
console.log(strongHuman.charAt(2));

console.log(strongHuman.length);
console.log(strongHuman.indexOf('t'));
console.log(strongHuman.indexOf('c'));

const newString = strongHuman.substring(0,4);
console.log(newString);

const newControl = strongHuman.slice(-8,4);
console.log(newControl);


const newSuppose ="    hello    ";

console.log(newSuppose);
console.log(newSuppose.trim());

const url = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/%20slice";

console.log(url.replace('%20' ,'-'));

console.log(url.includes('slice'));
console.log(url.includes('on'));
console.log(url.includes('Objects'));


console.log(strongHuman.split('-'));

