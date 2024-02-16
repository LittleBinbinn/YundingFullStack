function work() {
    var Str = document.getElementById("border").value;
    var subStr = document.getElementById("sub-border").value;
    var count = 0;
    while (Str.indexOf(subStr) !== -1) {
        count++;
        Str = Str.substring(Str.indexOf(subStr) + subStr.length);
    }
    document.getElementById("result").textContent = count;
}
