function countSubstring() {
  let strFirst = document.getElementById('strOrigin').value;
  let strSecond = document.getElementById('strSuccession').value;
  let count = 0;
  let firstStrLen = strFirst.length;
  let secondStrlen = strSecond.length;
  let i = 0;
  let j = 0;
  for (i = 0; i <= firstStrLen ; i++) {
    if (strFirst.charAt(i) === strSecond.charAt(0)) {
      for (j = 0; j < secondStrlen; j++) {
        if (strFirst.charAt(i + j) !== strSecond.charAt(j)) {
          break;
        }
      
        if (j === secondStrlen - 1) {
          count++;
        
        }
      }
    }
    document.getElementById('num').innerHTML = " " + count;
        
  }
}