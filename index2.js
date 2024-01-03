//template literal
let str  = 'shiv is good boy'
// console.log('str:', str)
let str1  = `shiv is good boy1`
// console.log('str1:', str1)

// actually there is no such differ in seeing it
// but we use temeplate literal to use any value / variable in between string

let name2  = 'Nilesh'
let place = 'indore'
let age  = 24

let str2 = 'My name is' + ' '+ name2 + " " + 'I live in ' + place + ' and may age is ' + age
// console.log('str2:', str2)

// above method is normal    {  CONCATENATION  }
// but can be achieve using template literals

let str3 = `My name is ${name2} and may age is ${age} and I live in ${place}`
// console.log('str3:', str3)

/// checking the type of data type with other 
// number & string 

/*
String + String  = String
String + Number  = String
Number + Number  = Number
NUmber + String  = String 
*/

let num  = 1;
let num2  = '1';
let st  = '1';
let st2  = '2';
// console.log(typeof(st+num)) // 11
// console.log(typeof(num+st)) // 11
// console.log((num+num2)) // 2
// console.log(st2+st) 


// let  a = 12;
// let  b = "asdf";
// console.log(a*b)      // NaN not a number 

// console.log(NaN=='a'?true : false)


// SWITCH STATEMENT ---- 
// kind of concept in js or function in js which takes expressions or value and it has cases if the expression  match with case then code will run accordingly to tht case & there is break also to break the code and it will not check to other casee if break is not use then it will check all cases and there is default case we have to use to tell code if no cases match with expression then default will run !

// SYNTAX IS VERY IMPORTANT
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}


/*






*/




// if(a==1){

// }


function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30
