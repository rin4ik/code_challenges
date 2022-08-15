var isSubsequence = function(s, t) {
    let prev = -1
	for (let item of s) {
        const curr = t.indexOf(item, prev > -1 ? prev + 1 : 0)
        if(curr < 0) return false
        if(prev > -1 && curr <= prev) return false
          prev = curr
    }
    return true
};

isSubsequence('bb', 'ahbgdc') // false
isSubsequence('b', 'ahbgdc') // true
isSubsequence('ab', 'baab') // true