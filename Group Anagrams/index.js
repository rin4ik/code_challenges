var groupAnagrams = function(strs) {
    let ht = {}
    for(let str of strs) {
	    const sorted = str.split('').sort().join('')
        if (ht[sorted]) ht[sorted].push(str)
        else ht[sorted] = [str]
    }
    return Object.values(ht)
};
console.log(groupAnagrams(['ab', 'bba', 'abb', 'bc']))
// result: [["ab"], ["bba", "abb"], ["bc"]]
