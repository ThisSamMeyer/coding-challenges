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
    specRegex: [
    [/CM/,900],[/CD/,400],[/XC/,90],[/XL/,40],[/IX/,9],[/IV/,4]],
    regRegex: [
    [/M+/,1000],[/D+/,500],[/C+/,100],[/L+/,50],[/X+/,10],[/V+/,5],[/I+/,1]],

    basicRoman: [
    ['M',1000],['C',100],['X',10],['I',1]],
    specRoman: [
    [/C{9}/,'CM'],[/C{5}/,'D'],[/C{4}/,'CD'],
    [/X{9}/,'XC'],[/X{5}/,'L'],[/X{4}/,'XL'],
    [/I{9}/,'IX'],[/I{5}/,'V'],[/I{4}/,'IV']],

    toRoman: function(decimal) {
        let result = '';
        this.basicRoman.forEach(set => {
            while (decimal >= set[1]) {
                result += set[0];
                decimal -= set[1];
            }
        })
        this.specRoman.forEach(set => {
            result = result.replace(set[0],set[1]);
        })
        return result;
    },

    fromRoman: function(roman) {
        let result = 0;
        this.specRegex.forEach(reg => {
            if (reg[0].test(roman)) {
                roman = roman.replace(reg[0],'');
                result += reg[1];
            }
        })
        this.regRegex.forEach(regex => {
            let matches = roman.match(regex[0]);
            if (matches) {
                result += regex[1] * matches[0].length;
            }
        })
        return result;
    }
}

// let test = 'XC'
// (test.match(/CM/));   // 900
// (test.match(/CD/));   // 400
// (test.match(/XC/));   // 90
// (test.match(/XL/));   // 40
// (test.match(/IX/));   // 9
// (test.match(/IV/));   // 4

// if (test.match(/XL/)) {
//     console.log('yes')
// }

console.log(RomanNumerals.toRoman(2466));
console.log(RomanNumerals.toRoman(3999));
console.log(RomanNumerals.toRoman(10));
console.log(RomanNumerals.toRoman(3500));

console.log(RomanNumerals.fromRoman('III'));