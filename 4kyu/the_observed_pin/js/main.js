// Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.

// The keypad has the following layout:

// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘
// He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

// He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.

// * possible in sense of: the observed PIN itself and all variations considering the adjacent digits

// Can you help us to find all those variations? It would be nice to have a function, that returns an array (or a list in Java/Kotlin and C#) of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs (get_pins in python, GetPINs in C#). But please note that all PINs, the observed one and also the results, must be strings, because of potentially leading '0's. We already prepared some test cases for you.

// Detective, we are counting on you

// input length of 1 to 8 digits
// input and output must be strings
// input[possible variations] = 1[2,4]  2[1,3,5]  3[2,6]  4[1,5,7]  5[2,4,6,8]  6[3,5,9]  7[4,8]  8[5,7,9,0]  9[6,8]  0[8]

function getPINs(observed) {
    // set possible variations object
    const variations = {
        '0': ['0','8'],
        '1': ['1','2','4'],
        '2': ['2','1','3','5'],
        '3': ['3','2','6'],
        '4': ['4','1','5','7'],
        '5': ['5','2','4','6','8'],
        '6': ['6','3','5','9'],
        '7': ['7','4','8'],
        '8': ['8','5','7','9','0'],
        '9': ['9','6','8']
    }
    // set base case, if passed code is 1 number, return associated array from variations object
    if(observed.length == 1){
        return variations[observed];
    }
    // declare array to store results
    let results = [];
    // pull the first digit from passed code, set it to associated array from variations object
    let digit = variations[observed[0]];
    // set variable to hold remaining digits of code
    let rem = observed.slice(1);
    
    digit.forEach(a => {
        getPINs(rem).forEach(b => {
            results.push(a + b);
        });
    });
    return results;
}

console.log(getPINs('369'));
// 
// ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"]

// console.log(getPINs('8'));
// // ["5", "7", "8", "9", "0"]

console.log(getPINs('13'));
// [ 1(3,2,6), 2(3,2,6), 4(3,2,6) ]
// ["13", "12", "16", "23", "22", "26", "43", "42", "46"]

console.log(getPINs('11'));
// ["11", "22", "44", "12", "21", "14", "41", "24", "42"]



