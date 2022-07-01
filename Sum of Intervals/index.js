function sumIntervals(intervals) {
    let ys = intervals.sort(([a,b], [c,d]) => a-c);
    let m = -Number.MAX_VALUE;
    let res = 0;
    for (let [a,b] of ys) {
      m = Math.max(m, a);
      res += Math.max(0, b-m);
      m = Math.max(m, b);
    }
    return res;
  }


  const sum = sumIntervals([ [1,5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11]])
  console.log(sum)