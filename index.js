var Buffer = require("buffer").Buffer,
    fs = require("fs");

var sc = fs.readFileSync("./sc.txt", "utf8"),
    tc = fs.readFileSync("./tc.txt", "utf8");

var SimpleBig = {};

SimpleBig.s2c = function(str) {
  var ret = "", i, len, idx;
  str = str || this;
  if(typeof str === "string") {
    for(i=0,len=str.length; i<len; i++) {
      idx = sc.indexOf(str.charAt(i));
      ret += (idx === -1 ) ? str.charAt(i): tc.charAt(idx);
    }
  }
  return ret;
}

SimpleBig.t2s = function(str) {
  var ret = "", i, len, idx;
  str = str || this;
  if(typeof str === "string") {
    for(i=0,len=str.length; i<len; i++) {
      idx = tc.indexOf(str.charAt(i));
      ret += (idx === -1) ? str.charAt(i) : sc.charAt(idx);
    }
  }
  return ret;
}

SimpleBig.attach = function() {
  ["s2t", "t2c"].forEach(function(name, i) {
    if(!String.prototype[name]) {
      String.prototype[name] = SimpleBig[name];
    }
  });
}

module.exports = SimpleBig;