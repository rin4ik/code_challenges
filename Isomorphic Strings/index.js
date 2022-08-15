var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
      return false;
    };
    let k = {}
   	for(let i = 0; i < s.length; i++) {
    	if(k[s[i]]) {
      	    if(k[s[i]] !== t[i]) return false;
        } else {
            if(Object.values(k).includes(t[i])) return false;
            k[s[i]] = t[i]
	    }
    }
    return true
};