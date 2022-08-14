// function firstUnique(str) {
// 	let hashTable = {};
// 	for(let char of str){
//     if(hashTable[char]) 
//     	hashTable[char]++
//     else hashTable[char] = 1
//   }
  
//   for(let j = 0; j < str.length; j++ ) {
//     const char = str[j]
//     if(hashTable[char] === 1) return j;
//   }
//   return -1;
// }

// solution with index
function firstUnique(str) {
    for(let i = 0; i < str.length; i++ ) {
        const char = str[i]
        if(str.indexOf(char) === str.lastIndexOf(char)) {
            return i;
        }
    }
    return -1;
}
const unIq = firstUnique('22ddaarreoonn');
console.log(unIq)