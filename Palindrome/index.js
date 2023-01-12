 // first way using str split and reverse array and checking if they are equal O(n)
function palindrome(str) {
	str = str.replace(/[^\w]/gi, '').toLowerCase()
    return str === str.split('').reverse().join('')
}

 // # second way is more better using Pointer method
 // O(n/2) will will loop twice faster using left and right pointer
function palindrome(str) {
	str = str.replace(/[^\w]/gi, '').toLowerCase()
    let left = 0
    let right = str.length - 1
    while(left < right) {
        if(str[left] !== str[right]) return false
        left++
        right--
    }
    return true
}


console.log(palindrome('radar'))
