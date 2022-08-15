var groupAnagrams = function(list) {
    let hashTable = {}
    for(let val of list) {
	    const sorted = val.split('').sort().join('')
        if(hashTable[sorted]) {
      	    hashTable[sorted].push(val)
        } else {
      	    hashTable[sorted] = [val]
        }
    }
    return Object.values(hashTable)
};
console.log(groupAnagrams(['ab', 'bba', 'abb', 'bc']))
// result: [["ab"], ["bba", "abb"], ["bc"]]
