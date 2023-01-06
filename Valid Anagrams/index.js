function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};
  for (let i = 0; i < first.length; i++) {
    const letter = first[i];
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
  }

  for (let j = 0; j < second.length; j++) {
    const letter = second[j]
    if(!lookup[letter]) {
      return false;
    }
    lookup[letter] -= 1
  }
  return true;
}

const isValid = validAnagram('anagrma', 'anagram')

console.log(isValid)
