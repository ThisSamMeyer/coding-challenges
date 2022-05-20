// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:
// {1,2,3,4,3,2,1} --> returns 3 because at the 3rd position of the array, the sum of left side of the index {1,2,3}, and the sum of the right side of the index {3,2,1} both equal 6.

// {1,100,50,-51,1,1} --> returns 1 because {1} sums to 1 and {50,-51,1,1} sums to 1

// Last one: {20,10,-80,10,10,15,35}  --> returns 0 because {} sums to 0 and {10,-80,10,10,15,35} sums to 0
// (empty arrays sum to 0 in this kata)

// Input: An integer array of length 0 < arr < 1000. 
// The numbers in the array can be any integer positive or negative.

// Output: The lowest index N where the side to the left of N is equal to the side to the right of N. 
// If you do not find an index that fits these rules, then you will return -1.

// Note: If you are given an array with multiple answers, return the lowest correct index.


function findEvenIndex(arr){
    for(i=0;i<arr.length;i++){
        if(arr.slice(0,i).reduce((p,c)=>p+c,0) === arr.slice(i+1).reduce((p,c)=>p+c,0)){
            return i
        }
    }return -1
}


console.log(findEvenIndex([1,2,3,4,3,2,1]))             // returns 3
console.log(findEvenIndex([1,100,50,-51,1,1]))          // returns 1
console.log(findEvenIndex([20,10,-80,10,10,15,35]))     // returns 0