function countSubstring() {
  var inputString = document.getElementById("inputString").value;
  var inputSubstring = document.getElementById("inputSubstring").value;
  var count = inputString.split(inputSubstring).length - 1;
  document.getElementById("outputCount").innerText = count;
}
