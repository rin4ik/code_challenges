function removeZeros(array) {
    const head = []
    const tail = []
    for (const e of array) {
      if (e === 0 || e === "0") {
        tail[tail.length] = e
      } else {
        head[head.length] = e
      }
    }
    return [...head, ...tail]
  }
  const result =  removeZeros([1,null,"5",false,"2", 0,8,6,null,"0",0])

  console.log(result)
