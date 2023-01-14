function search (arr, target, start = 0, end = arr.length - 1) {
  if(start > end) {
    console.log('not found')
    return -1;
  }

  const middle = Math.floor((start + end) / 2)

  if(arr[middle] === target) {
    console.log(`${target} found at index ${middle}`)
    return middle;
  } else if (arr[middle] > target) {
    search(arr, target, start, middle - 1)
  } else if (arr[middle] < target) {
    search(arr, target, middle + 1, end)
  }
}

const findElIndex = search([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 10)

console.log(findElIndex)
