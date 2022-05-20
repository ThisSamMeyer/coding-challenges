// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
    return text.toLowerCase()
    .split('')
    .filter((char,i,arr) => arr.indexOf(char) !== i)
    .filter((c,index,a) => a.indexOf(c) === index)
    .length;
}

console.log(duplicateCount("abcde"))            // 0 -> no repeats
console.log(duplicateCount("aabbcde"))          // 2 -> 'a' and 'b' repeat
console.log(duplicateCount("aabBcde"))          // 2 -> 'a' and 'b'/'B' repeat
console.log(duplicateCount("indivisibility"))   // 1 -> 'i' repeats
console.log(duplicateCount("Indivisibilities")) // 2 -> 'i' and 's' repeat
console.log(duplicateCount("aA11"))             // 2 -> 'a' and '1' repeat
console.log(duplicateCount("ABBA"))             // 2 -> 'a'/'A' and 'b'/'B' repeat