// Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.

// Legend:
// -Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
// -Function input: String contains only letters, uppercase letters are unique.
// Task:
// Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".

// function findChildren(dancingBrigade) {
//     dancingBrigade = dancingBrigade.split('').sort()  // [B,E,b,b,e,e,e]
//     let parents = dancingBrigade.filter(char => char.charCodeAt(0) < 97)
//     let children = dancingBrigade.filter(char => char.charCodeAt(0) >= 97)
//     let sorted = []
//     for(i=0;i<parents.length;i++){
//         sorted.push(parents[i])
//         for(j=0;j<children.length;j++){
//             if(children[j].charCodeAt(0) - parents[i].charCodeAt(0) === 32){
//                 sorted.push(children[j])
//             }
//         }
//     }
//     return sorted.join('')
// }

function findChildren(dancingBrigade) {
    return dancingBrigade.toLowerCase().split('').sort()
            .map((char,i,arr) => char !== arr[i-1] ? char.toUpperCase(): char)
}

console.log(findChildren("beeeEBb"))     // "BbbEeee"
console.log(findChildren("uwwWUueEe"))   // "EeeUuuWww"
console.log(findChildren("abBA"))        // "AaBb"
console.log(findChildren("AaaaaZazzz"))  // "AaaaaaZzzz"
console.log(findChildren("CbcBcbaA"))    // "AaBbbCcc"
console.log(findChildren("xXfuUuuF"))    // "FfUuuuXx"