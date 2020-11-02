function snail(array){
    if(array.length < 2){
        return array[0] || [] 
    }else{
      const sorted = []
      sorted.push(...array.shift())
      for(let i=0; i<array.length-1; i++){
        sorted.push(array[i].pop())
      }
      sorted.push(...array.pop().reverse())
      for(let i=array.length-1; i>=0; i--){
        sorted.push(array[i].shift())
      }
      sorted.push(...snail(array))
      return sorted
    }
}

console.log(snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]))