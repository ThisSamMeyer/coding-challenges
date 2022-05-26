// Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Input range : 1 <= n < 4000

// In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

// Examples
// RomanNumerals.toRoman(1000); // should return 'M'
// RomanNumerals.fromRoman('M'); // should return 1000

// Help
// Symbol	Value
//   I	      1
//   IV	      4
//   V	      5
//   X	      10
//   L	      50
//   C	     100
//   D	     500
//   M	    1000

const RomanNumerals = {
    'M':  1000,
    'CM': 900,
    'D':  500,
    'CD': 400,
    'C':  100,
    'XC': 90,
    'L':  50,
    'XL': 40,
    'X':  10,
    'IX': 9,
    'V':  5,
    'IV': 4,
    'I':  1,

    toRoman: function(decimal) {
        let result = '';
        for (let key in this) {
            while (decimal >= this[key]) {
                result += key;
                decimal -= this[key];
            }
        }
        return result;
    },

    fromRoman: function(roNum) {
        let result = 0;
        let start = 0;
        for (let key in this) {
            while (roNum.startsWith(key,start)) {
                result += this[key];
                start += key.length;
            }
        }
        return result;
    }
}

console.log(RomanNumerals.toRoman(2466));   // MMCDLXVI
console.log(RomanNumerals.toRoman(3999));   // MMMCMXCIX
console.log(RomanNumerals.toRoman(10));     // X
console.log(RomanNumerals.toRoman(3504));   // MMMDIV

console.log(RomanNumerals.fromRoman('III'));        // 3
console.log(RomanNumerals.fromRoman('MMCDLXVI'));   // 2466
console.log(RomanNumerals.fromRoman('MMMCMXCIX'));  // 3999
console.log(RomanNumerals.fromRoman('X'));          // 10
console.log(RomanNumerals.fromRoman('MMMDIV'));     // 3504