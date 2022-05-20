// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

// function sumStrings(a,b) { 
//     a = a.split('').map(x => +x)
//     b = b.split('').map(x => +x)
//     while(a.length !== b.length){
//         a.length < b.length ? a.unshift(0) : b.unshift(0);
//     };
//     let sumStr = a.map((n,i) => n + b[i]);
//     if(sumStr[0] > 9){
//         sumStr.unshift[1];
//     };
//     for(i=sumStr.length-1;i>0;i--){
//         if(sumStr[i] > 9){
//             sumStr[i-1]++;
//             sumStr[i] -= 10;
//         }
//     }
//     while(sumStr[0] === 0){
//         sumStr.shift()
//     }
//     return sumStr.join('')
// }

function sumStrings(a,b) {
    return (BigInt(a) + BigInt(b)).toString();
}

console.log(sumStrings('712569312664357328695151392', '8100824045303269669937')) 
// '712577413488402631964821329'

console.log(sumStrings('00103', '08567'))
// '8670'