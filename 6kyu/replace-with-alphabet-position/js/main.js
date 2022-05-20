// In this kata you are given a string and asked to replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )


function alphabetPosition(text) {
    return text.toUpperCase().split('').map(n => n.charCodeAt(0) - 64).filter(v => v > 0 && v < 27).join(' ')
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))