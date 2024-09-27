// Same array
/**
 * Write a function called same, which accepts two arrays. 
 * The function should return true if every value in the array has it's corresponding value squared in the second array. 
 * The frequency of values must be the same.
 * 
 * Example
 * same([1,2,3], [4,1,9]) // true
 * same([1,2,3], [1,9]) // false
 * same([1,2,1], [4,4,1]) // false (must be same frequency)
 */

// Compare two arrays if they are the same

function compareTwoArrays (arr1, arr2) {
    console.log({} === {})

}

// compareTwoArrays([1,2,3], [1,2,3])

// Time Complexity - N^2
//  function same(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     for(let i = 0; i < arr1.length; i++){
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         if(correctIndex === -1) {
//             return false;
//         }
//         arr2.splice(correctIndex,1)
//     }
//     return true
// }

// Time Complexity - O(n) 
// function same(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     let frequencyCounter1 = {}
//     let frequencyCounter2 = {}
//     for(let val of arr1){
//         frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
//     }
//     for(let val of arr2){
//         frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
//     }
//     for(let key in frequencyCounter1){
//         if(!(key ** 2 in frequencyCounter2)){
//             return false
//         }
//         if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
//             return false
//         }
//     }
//     return true
// }

// Darren Smith solution
const sortNumber = numArray => numArray.sort((a, b) => a - b);
// Here, the "sort" js function has a time complexity of O(n log n).

const same = (_arr1, _arr2) => {
    const arr2 = sortNumber(_arr2); // O(n log n)

    return sortNumber(_arr1).every((res,i)=>arr2[i]===res**2);
    // sortNumber: O(n log n)
    // and then the "every" function requires a loop for (n), so it's time complexity is O(n).
}

// Finally, the whole time complexity is O(n log n) + O(n log n) + O(n) = O(n log n)
// end darren smith solution
console.log("Same", same([1,2,3], [4,1,9]))

// Anagrams

/**
 * Given two strings, write a function to determine if the second string is an anagram of the first. 
 * An anagram is a word or phrase or name formed by rearranging the letters of another 
 * such as cinema formed from iceman
 * 
 * validAnagram('', '') // true
 * validAnagram('aaz', 'zza') // false
 * validAnagram('anagram', 'nagaram') // true
 * validAnagram("rat","car") // false) // false
 * validAnagram('awesome', 'awesom') // false
 * validAnagram('qwerty', 'qeywrt') // true
 * validAnagram('texttwisttime', 'timetwisttext') // true
 */

function validAnagram () {

}