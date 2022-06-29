function topThreeWords(text) {  
    const topWords = text.toLowerCase()
        .replace(/[^a-zA-Z0-9']/g, " ")
        .trim()
        .split(/\s+/)
        .filter(w => w && w !== "'")
        .reduce((acc, v) => {
            acc[v] = (acc[v] || 0) + 1
            return acc
        }, {});

    return Object.keys(topWords)
        .sort((a,b) => topWords[b] - topWords[a])
        .slice(0, 3)
 
}

const top3 = topThreeWords(" web df      pl pl pl web df df  ")
console.log(top3)