let obj = {
    name: 'shiv',
    age: 25, 
    place: "indore",
    add: {
        main: "jaynagar",
        other: 'pithampur',
        names: {
            first: "nilesh",
            second: 'chauhan'
        }

    },
    no: 95454
}

let {age} = obj
console.log('main:', age)


function outer(){
    let x= 10;
    function inner(){
        let y=25
        console.log(x+y);
    }
    
    inner()
}
outer()

const cars = ["Volvo", "Jeep", "Mercedes"];
console.log(cars.length);

    // const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
    // console.log(fruits.sort());

const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
for(i of fruits){
    console.log(i);
}


for (i = 0; i < 10; i++) {
  console.log(i);
  if (i == 5) {
//     break;
//   }
// }


// for (i = 0; i < 10; i++) {
//   if (i == 5) {
//     continue;
//   }
//   console.log(i);
// }

<p id="demo"></p>


document.getElementsByTagName("p")[0].innerHTML
 = "Hello";



// <p id="demo"></p>

// <script>
// document.getElementById("demo").innerHTML
//  = "Hello";


// </script>


// <p id="demo"></p>

// <script>
// document.getElementsByTagName("p")[0].innerHTML
//  = "Hello";
// </script>
