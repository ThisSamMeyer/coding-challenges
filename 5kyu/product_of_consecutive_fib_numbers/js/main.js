// The Fibonacci numbers are the numbers in the following integer sequence (Fn):
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

// such as
// F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying
// F(n) * F(n+1) = prod.

// Your function productFib takes an integer (prod) and returns an array:
// [F(n), F(n+1), true] if F(n) * F(n+1) = prod.

// If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prod, you will return
// [F(n), F(n+1), false] 
// F(n) being the smallest one such as F(n) * F(n+1) > prod.

// Some Examples of Return:
// (depend on the language)

// productFib(714) # should return [21, 34, true], 
//                 # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

// productFib(800) # should return [34, 55, false], 
//                 # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55

function productFib(prod){
    let fib = fibSeq(prod)
    for(i=0;i<fib.length;i++){
        if(fib[i] * fib[i+1] === prod) {
            return [fib[i], fib[i+1], true];
        }else if(fib[i] * fib[i+1] > prod) {
            return [fib[i], fib[i+1], false]
        }
    }
}

function fibSeq(num){
    if(num === 0) {return [0]};
    let fib = [0,1];
    let i = 1
    while(fib[fib.length-1] < num){
        fib.push(fib[i-1] + fib[i]);
        i++
    };
    return fib;
}

// console.log(fibSeq(4895))
// console.log(fibSeq(5895))
// console.log(fibSeq(84049690))
// console.log(fibSeq(193864606))
// console.log(fibSeq(447577))
// console.log(fibSeq(602070))

console.log(productFib(4895))           // returns [55, 89, true]
console.log(productFib(5895))           // returns [89, 144, false]
console.log(productFib(74049690))       // returns [6765, 10946, true]
console.log(productFib(84049690))       // returns [10946, 17711, false]
console.log(productFib(193864606))      // returns [10946, 17711, true]
console.log(productFib(447577))         // returns [610, 987, false]
console.log(productFib(602070))         // returns [610, 987, true]