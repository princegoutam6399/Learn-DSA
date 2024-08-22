// implementation of the array in javascript

// var house = new Array(10,20,30,40);
// var house2 = new Array(4);

// var home = new Array("2BHK");
// console.log(house);
// console.log(house2);
// console.log(home);

// let arr = new Array(5);
// console.log(arr.length);
// console.log(arr);


// using the apply() and map() method for creating an array.

// let arr = Array.apply(null,Array(5))
// .map(function(){});

// console.log(arr.length);
// console.log(arr);

// values will be the index number 0, 1, 2, 3, 4.
// var arr = Array.apply(null,Array(5))
// .map(function(y,i){return i});

// console.log(arr.length);
// console.log(arr);

// using Array.from() method for creating an array.
// var arr = Array.from(Array(5));
// console.log(arr.length);
// console.log(arr);

// example 2 :
// var arr = Array.from("Hello");
// console.log(arr.length);
// console.log(arr);

// pass a single element as a parameter
// var arr = Array.from("H".repeat(5));
// console.log(arr.length);
// console.log(arr);


// arrow function to create an array 
// let arr = Array.from({length:5},(x,i)=>i);
// console.log(arr.length);
// console.log(arr);

// Using for loop
// const size = 5;
// const array = [];

// for(let i=0;i<size;i++){
//     array.push(undefined);
// }

// console.log(array);

// Using loop(for or forEach or for…of) Method

// const arr = [100,200,300,400,500];
// arr.forEach((e,i)=>{
//     console.log(`Element at index ${i}: ${e}`)
// })

// Using map() Method

// const arr = [10,20,30,40,50];
// const list = arr.map((e,i)=>{
//     return `The Element at index ${i}: ${e}`
// });

// console.log(list);


// Using find() Method
// const arr = [10,20,30,40,50];
// const list = arr.find((element)=>element>30);
// console.log(list);

// Using Destructuring Assignment
// let [fname, , ,lastname] = ["alpha","beta","gamma","delta"];
// console.log(fname);
// console.log(lastname);

// Using filter Method:
// const arr = [1,2,3,4,5,6];
// const filterArr = arr.filter((element=>element>2));
// console.log(filterArr);

