// Create a function that takes a string and separates it into a sequence of letters.
// The array will be formatted as so:
// [['J','L','L','M']
// ,['u','i','i','a']
// ,['s','v','f','n']
// ,['t','e','e','']]

// The function should separate each word into individual letters, with the first word in the sentence having its letters in the 0th index of each 2nd dimension array, and so on.

// Shorter words will have an empty string in the place once the word has already been mapped out. (See the last element in the last part of the array.)

// Examples:
// sepStr("Just Live Life Man")
// // => [['J','L','L','M'],
// // => ['u','i','i','a'],
// // => ['s','v','f','n'],
// // => ['t','e','e','']]);

// sepStr("The Mitochondria is the powerhouse of the cell")
// // => [ [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
// // => [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
// // => [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
// // => [ '', 'o', '', '', 'e', '', '', 'l' ],
// // => [ '', 'c', '', '', 'r', '', '', '' ],
// // => [ '', 'h', '', '', 'h', '', '', '' ],
// // => [ '', 'o', '', '', 'o', '', '', '' ],
// // => [ '', 'n', '', '', 'u', '', '', '' ],
// // => [ '', 'd', '', '', 's', '', '', '' ],
// // => [ '', 'r', '', '', 'e', '', '', '' ],
// // => [ '', 'i', '', '', '', '', '', '' ],
// // => [ '', 'a', '', '', '', '', '', '' ]]


// function sepStr(str) {
//     // split the string into an array
//     let matrix = str.split(' ').map(word => word.split(''))

//     // find the length of the longest word and make all words the same length using empty strings
//     let max = (matrix.reduce((pv,cv) => cv.length > pv.length ? cv : pv)).length
//     for(i=0;i<matrix.length;i++){
//         while(matrix[i].length < max){
//             matrix[i].push('')
//         }
//     }

//     // let transposed = []
//     // for(i=0;i<max;i++){
//     //     transposed[i] = matrix.map(word => word[i] || '') 
//     // }

//     return matrix.reduce((pv,cv) => matrix.map((word,i) => (pv[i] || []).concat(cv[i])),[])

// }

function sepStr(str) {
    // split the string into an array
    let matrix = str.split(' ').map(word => word.split(''))
    // find the length of the longest word
    let max = (matrix.reduce((pv,cv) => cv.length > pv.length ? cv : pv)).length
    // transpose the matrix
    let transposed = []
    for(i=0;i<max;i++){
        for(j=0;j<matrix.length;j++){
            transposed[i] = (transposed[i] || []).concat(matrix[j][i] || [''])
        }
    }
    return transposed
}

console.log(sepStr('The Mitochondria is the powerhouse of the cell'))