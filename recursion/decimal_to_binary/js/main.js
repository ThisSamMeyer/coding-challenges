// use recursion to convert a given number into it's binary form
// 1)   233 / 2 = 116 rem 1
//  2)   116 / 2 =  58 rem 0
//   3)    58 / 2 =  29 rem 0
//    4)    28 / 2 =  14 rem 1
//     5)    14 / 2 =   7 rem 0
//      6)     7 / 2 =   3 rem 1
//       7)     3 / 2 =   1 rem 1
//        8)     1 / 2 =   0 rem 1
// 233 in binary is the result of the remainders in reverse order, 1 1 1 0 1 0 0 1

function toBinary(input){
    // base case
    if(input / 2 < 1){
        return `${input % 2}`;
    }
    // recursive call
    return `${toBinary(Math.floor(input / 2))}${input % 2}`;
}

console.log(toBinary(233))
console.log(toBinary(1))

// toBinary(233): 116 !< 1, continue -> return toBinary(116), 233 % 2 = 1
//  toBinary(116): 58 !< 1, continue -> return toBinary(58), 116 % 2 = 0
//   toBinary(58): 29 !< 1, continue -> return toBinary(29), 58 % 2 = 0
//    toBinary(29): 14 !< 1, continue -> return toBinary(14), 29 % 2 = 1
//     toBinary(14): 7 !< 1, continue -> return toBinary(7), 14 % 2 = 0
//      toBinary(7): 3 !< 1, continue -> return toBinary(3), 7 % 2 = 1
//       toBinary(3): 1 !< 1, cintinue -> return toBinary(1), 3 % 2 = 1
//        toBinary(1): 0 < 1, return 1 % 2 = 1
//       toBinary(3) = toBinary(1) + 3 % 2 = 1 + 1
//      toBinary(7) = toBinary(3) + 7 % 2 = 11 + 1
//     toBinary(14) = toBinary(7) + 14 % 2 = 111 + 0
//    toBinary(29) = toBinary(14) + 29 % 2 = 1110 + 1
//   toBinary(58) = toBinary(29) + 58 % 2 = 11101 + 0
//  toBinary(116) = toBinary(58) + 116 % 2 = 111010 + 0
// toBinary(233) = toBinary(116) + 233 % 2 = 1110100 + 1 -> 11101001