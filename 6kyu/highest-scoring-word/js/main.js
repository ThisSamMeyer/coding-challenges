// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

function high(x){
    let arrVals = x.split(' ').map(word => word.split(''))

    arrVals = arrVals.map(word => word.map(lett => lett.charCodeAt(0) - 96))

    arrVals = arrVals.map(subArr => subArr.reduce((pv,cv) => pv + cv),0)

    max = arrVals.reduce((pv,cv) => cv > pv ? cv : pv)

    return x.split(' ')[arrVals.indexOf(max)]
}

console.log(high('what time are we climbing up the volcano'))