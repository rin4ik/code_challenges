function maxChars(str) {
  let charMap = {}

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1
  }

  return Object.keys(charMap).sort((a,b) => charMap[b] - charMap[a])[0]
}

const max = maxChars('sefsefsefffdddddddddddwf 1111ffdddsddsdds111111111')

console.log(max)
