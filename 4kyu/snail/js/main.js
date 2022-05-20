// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]]

snail = function(array){
    let snail = [];
    while(array.length >= 1){
        if(array.length === 1){
            snail = snail.concat(array.shift());
        }else{
            snail = snail.concat(array.shift()).concat(array.map(item => item.pop())).concat(array.pop().reverse()).concat(array.map(item => item.shift()).reverse());
        };
    };
    return snail;
};

console.log(snail([[1,2,3],[8,9,4],[7,6,5]]));
console.log(snail([[1,2,3,4,5],[16,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]]));