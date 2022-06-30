function formatDuration (seconds) {
    if (seconds === 0) return 'now';
    
    var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
    res = [];
    
    for (var key in time) {
      if (seconds >= time[key]) {
        var val = Math.floor(seconds/time[key]);
        res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
        seconds = seconds % time[key];
      }
    }
   
    return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
}


const time = formatDuration(69487122)
console.log(time)
  