// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071
// If the digits can't be rearranged to form a bigger number, return -1:

// nextBigger(num: 9)   // returns -1
// nextBigger(num: 111) // returns -1
// nextBigger(num: 531) // returns -1

function nextBigger(n) {
    if(n < 10) return -1;
    n = n.toString().split('').map(x => +x);
    if(n.length === 2){
        return n[0] < n[1] ? Number(n.reverse().join('')) : -1;
    }
    for(i=n.length-2;i>=0;i--){
        if(n[i]<n[i+1]){
            let a = n[i]
            let partial = n.splice(i+1).sort()
            let r = partial.findIndex(x => x > a)
            n[i] = partial[r]
            partial[r] = a
            partial = partial.sort()
            return Number(n.concat(partial).join(''))
        }
    }
    return -1
};


console.log(nextBigger(9));         // returns -1
console.log(nextBigger(111));       // returns -1
console.log(nextBigger(531));       // return -1
console.log(nextBigger(12));        // returns 21
console.log(nextBigger(513));       // returns 531
console.log(nextBigger(2017));      // returns 2071