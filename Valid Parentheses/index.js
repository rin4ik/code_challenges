function isValid (s) {
  const stack = [];
  const pairs = {'[': ']', '{': '}', '(': ')'};

  for (let char of s) {
    if(char in pairs) {
      stack.push(char)
    } else {
      if(stack.length === 0) return false;
      const last = stack.pop();
      if(pairs[last] !== char) return false;
    }
  }

  if(stack.length) {
    return false;
  }
  return true;
}

const valid = isValid('([]{})')
console.log(valid)
