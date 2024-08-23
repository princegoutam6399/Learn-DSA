// Bubble Sort 
// function bubbleSort(arr) {
//     const len = arr.length;
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//             }
//         }
//     }
//     return arr;
// }

// const arr = [20, 50, 10, 80, 40];
// console.log(bubbleSort(arr));


// Insertion Sort

// function insertionSort(arr) {
//     const len = arr.length;
//     for (let i = 1; i < len; i++) {
//         let current = arr[i];
//         let j = i - 1;
//         while (j >= 0 && arr[j] > current) {
//             arr[j + 1] = arr[j];
//             j--;
//         }
//         arr[j + 1] = current;
//     }
//     return arr;
// }

// const arr = [20, 50, 10, 80, 40];
// console.log(insertionSort(arr));


