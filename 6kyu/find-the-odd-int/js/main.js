// Given an array of integers, find the one that appears an odd number of times. 
// There will always be only one integer that appears an odd number of times.

// function findOdd(arr) {
//     for(i=0; i<arr.length; i++){
//         let count = 0
//         for(x=0; x<arr.length; x++){
//             if(arr[i] === arr[x]){
//                 count ++
//             }
//         }
//         if((count % 2) !== 0){
//             return arr[i]
//         }
//     }
// }

const findOdd = arr => arr.reduce((pv,cv) => arr.filter(test => test === cv).length % 2 === 1 ? cv : pv);

console.log(findOdd([1,1,2,1,2,3,1,3,2]))