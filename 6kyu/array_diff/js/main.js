// Your goal in this kata is to implement a difference function, which subtracts one list from another 
// and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// Example: arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// Example: arrayDiff([1,2,2,2,3],[2]) == [1,3]

// function arrayDiff(a,b) {
//     return a.filter(element => !b.includes(element));
// };

const arrayDiff = (a,b) => a.filter(n => !b.includes(n));

console.log(arrayDiff([1,2],[1]));
console.log(arrayDiff([1,2,2,2,3,4,4,6],[2,4]));