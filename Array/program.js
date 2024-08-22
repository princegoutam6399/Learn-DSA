// Find the Largest Element in an Array
// const arr = [10,30,80,40,50];
// let max='';
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max = arr[i];
//     }
// }
// console.log(max);


// Find the Largest Element in an Array using Recursion

// function largest(arr,max,i){
//     if(i==max-1){
//         return arr[i];
//     }
//     let recMax = largest(arr,max,i+1);
//     return Math.max(recMax,arr[i]);
// }

// const arr = [10,30,80,40,50];
// let max=arr.length;
// console.log("Largest in given array is", largest(arr, max, 0));

// Check an Array is Sorted or Not
// function checkSorted(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i + 1]) {
//             return false;
//         }
//     }
//     return true;
// }

// const arr = [20, 40, 10, 50, 14];
// console.log(checkSorted(arr));



// Reverse an Array in JavaScript
// let arr = [10,20,30,40];
// let revArr = [];
// console.log("Original Array");
// console.log(arr);

// for(let i=arr.length-1;i>=0;i--){
//     revArr.push(arr[i]);
// }

// console.log("Reverse Array");
// console.log(revArr);

// Example 2 : Using map method
// let arr = [1,2,3,4,5];

// console.log("Original Array");
// console.log(arr);

// revArr = arr.map((element,index)=>arr[arr.length-1-index]);

// console.log("Reverse Array");
// console.log(revArr);


// Example 3: Using Recursion
// function checkReverse(arr){
//     if(arr.length===0){
//         return [];
//     }else{
//         return [arr[arr.length-1]].concat(checkReverse(arr.slice(0,arr.length-1)));
//     }
// }

// const arr = [1,2,3,4,5,6];
// console.log("Original Array");
// console.log(arr);

// const revArr = checkReverse(arr);
// console.log("Reverse Array");
// console.log(revArr);



// Move all zeroes to end of array
// const arr = [0, 1, 0, 4, 0, 0, 2, 5];
// let lastIdx = 0;

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]!==0){
//         let temp = arr[i];
//         arr[i] = arr[lastIdx];
//         arr[lastIdx] = temp;

//         lastIdx++;
//     }
// }
// console.log(arr);



// Left Rotate by One in an Array

// function leftRotateByOne(arr){
//     let temp = arr[0];
//     for(let i=0;i<arr.length-1;i++){
//         arr[i]=arr[i+1];
//     }
//     arr[arr.length-1] = temp;
//     return arr;
// }

// const arr = [1,2,3,4,5];
// console.log("Original Array:",arr);

// console.log("Rotated Array:", leftRotateByOne(arr));