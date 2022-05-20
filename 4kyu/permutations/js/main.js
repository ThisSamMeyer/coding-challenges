// In this kata you have to create all permutations of a non empty input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

// Examples:

// * With input 'a'
// * Your function should return: ['a']
// * With input 'ab'
// * Your function should return ['ab', 'ba']
// * With input 'aabb'
// * Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// The order of the permutations doesn't matter. 

// function permutations(string) {
//     // console.log(`string = ${string}`)

//     if (!string || typeof string !== "string"){
//         return "Please enter a string"
//     } else if (string.length < 2 ){
//         return string
//     }
    
//     let permutationsArray = [] 
//     // console.log(permutationsArray)

//     for (let i = 0; i < string.length; i++){
//         // console.log(`i = ${i}`)

//         let char = string[i]
//         // console.log(`char = ${char}`)

//         let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
//         // console.log(`remaining = ${remainingChars}`)

//         for(let permutation of permutations(remainingChars)){
//             // console.log(`!! permutation = ${permutation}`)

//             permutationsArray.push(char + permutation)
//             // console.log(`permArray after = ${permutationsArray}`) 
//         }
//     }
//     return permutationsArray

// }


function permutations(string){
    if(string.length < 2){
        return [string];
    }
    let results = [];
    for(let i=0; i<string.length; i++){
        let char = string[i];
        let rem = string.slice(0,i) + string.slice(i+1);

        for(let perm of permutations(rem)){
            results.push(char + perm)
        }
    }
    results.forEach((set,i,arr) => {
        while(arr.lastIndexOf(set) !== i){
            arr.splice(arr.lastIndexOf(set),1)
        }
    })
    return results
}

console.log(permutations('a'))
// should return: ['a']

console.log(permutations('ab'))
// should return ['ab', 'ba']

console.log(permutations("abc"))

console.log(permutations('aabb'))
// should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

