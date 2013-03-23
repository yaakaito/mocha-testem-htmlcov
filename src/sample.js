var A = (function(){
  function A() {
    
  }
  A.prototype.method = function(v) {
    if (v) {
      return "YES";
    }
    else {
      return "NO";
    }
  }
  return A;
})();
