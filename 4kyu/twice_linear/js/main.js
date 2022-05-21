// Consider a sequence u where u is defined as follows:

// The number u(0) = 1 is the first one in u.
// For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
// There are no other numbers in u.
// Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

// 1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

// Task:
// Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u (so, there are no duplicates).

// Example:
// dbl_linear(10) should return 22

// Note:
// Focus attention on efficiency

function dblLinear(n) {
    let yi = 0;
    let zi = 0;
    let eqi = 0;
    let uSeq = [1];
    let y, z;
    while(yi + zi < n + eqi) {
        y = 2 * uSeq[yi] + 1;
        z = 3 * uSeq[zi] + 1;
        if(y < z){
            uSeq.push(y);
            yi++;
        }else if(z < y){
            uSeq.push(z);
            zi++;
        }else{
            uSeq.push(y);
            yi++;
            zi++;
            eqi++;
        }
    }
    return uSeq[n];
}



console.log(dblLinear(10))   //  22
console.log(dblLinear(20))   //  57
console.log(dblLinear(30))   //  91
console.log(dblLinear(50))   //  175
console.log(dblLinear(100))  //  447
console.log(dblLinear(10000))