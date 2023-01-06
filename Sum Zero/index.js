function sum(arr) {
  let left = 0;
  let right = arr.length - 1
  while(left < right) {
    let sum = arr[left] + arr[right]
    if(sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}
const res = sum([-5,-3,-2,-1,1,2,3,4]);
console.log(res)
