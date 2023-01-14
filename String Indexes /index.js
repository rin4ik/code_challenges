function getStringIndexes (str) {
  return Object.entries([...str.replace(/[^a-zA-Z]+/g, '')]
    .map(el => el.toLowerCase())
    .reduce((acc, item, index) => (acc[item] ? acc[item].push(index) : acc[item]=[index], acc), {}))
    .map(el => `${el[0]}: ${JSON.stringify(el[1])}`)
}

const indexes = getStringIndexes('aaaaaf0000990099---dsdfsdfffff')
console.log(indexes)
