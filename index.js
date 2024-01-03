//data types 

// 2 typeof data types in JS
// Primitive      Non - primitive

// how yo chck the data type in js 
// 2 ways 
let str  = '1'
let numb  =  1
console.log('data type str:', typeof str) // 1 way 
console.log('data type  numb:', typeof numb) // 1way 
console.log('data type str:', typeof(str)) // 2nd  way 
console.log('data type  numb:', typeof(numb)) // 2nd way 

// truthy & falsy values 
// 0 = false 
// 1 = true

//empty array  = true   IMPORTANT !!  
// arr.length == 0 if arr is empty its length is 0 and 0 is falsy value
let a  = 0; // 0 is falsy value 
let b = 1; // 1 is truthy value 

// if(b) and if(b==true) are same style this is called shorthand
if(b){                              
    console.log(true)
}else{
    console.log(false)
}
if(b==true){
    console.log(true)
}else{
    console.log(false)
}

// empty str is falsy value
let str1 = ''
console.log('str1:', str1)

if(str1){
    console.log(true)
}else{
    console.log(false)
}

// difference bet true & 'true'
// value are same but diff is data type true is Boolean and other one is string in js 
// str with space  =  truly value 
// if(' '){
//     console.log(true)
// }else{
//     console.log(false)
// }
// str without space  {empty string}  =  falsy value 

// if(''){
//     console.log(true)
// }else{
//     console.log(false)
// }

// string as 'true' =  truly value 

// if('true'){
//     console.log(true)
// }else{
//     console.log(false)
// }

// string as 'false' =  truly value 
// but false is Boolean = falsy value 
// below example: 
if('false'){
    console.log(true)
}else{
    console.log(false)
}
if(false){
    console.log(true)
}else{
    console.log(false)
}

// array 
let arr1 = [] // empty array   // truthy value  
let arr2 = [1,2]  // nornal aaray 

// if else can be used as urinary operator 
let ans = arr1 ? true : false   // syntax remeber     condition ? true : false
                                // if condition is true thenthis will happen else : after colon will happen


// console.log(ans)  //  output  true 
// if(arr1 == true){
//     console.log(true ,'skuhcsjdhc')
// }else{
//     console.log(false , 'cjg6765vg')
// }
// output will be true here 
// console.log([]?true: false)
// console.log(arr1?true: false)
// SAME  output will be true here   this is urinary format 
// BUT    -- length of empty arr is 0 & 0 is falsy value
console.log([].length ? true : false)  // false
console.log(arr1.length ? true : false) // false 
// empty obj is also true ALSO !!

// why empty [] is  truthy 
// bczo it is non promitive data- type and they are called as refrenence data type 
// they store the address they are not counted as value 
// this is one if the difference between primitive & non primitive data type 
// empty string is false as js is checking the value but [] is true as js is checking not value but as refrence (adddress )

console.log('1'=== 1) // false as checking data type also  
console.log('1' == 1) // only checking value so true 

console.log([]==[])  // false
console.log({}=={})  // false
//console.log([] === [])  // false This condition will always return 'false' since JavaScript compares objects by reference, not value.


// undefined and null
console.log(null ? 'true hai ': 'true nhi hai ')
// null is falsy value 
console.log(undefined ? 'true hai ': 'true nhi hai ')
// undefined is falsy value 
// var myVariable = null;
// var myOtherVariable;
// if (myVariable === null) {
//   console.log('true....')
// } 
// // true 
// if (myVariable == undefined) {
//   console.log('true......')
// }

// let m  = 'n'
// let M = 'N'
// console.log(typeof m === typeof M?true : false)

console.log(!null ? true: false)
