function counting() {
    let a = document.getElementById("str1").value;
    let b = document.getElementById("str2").value;
    let count = 0, i=0;
    for (i = 0; i <= a.length-b.length; i++){
        let num = true;
        for (j = 0; j < b.length; j++){
            if (a[i + j] !== b[j]) {
                num = false;
                break;
            }
        }
        if (num) {
            count++;
        }
    }
    document.getElementById("result").innerHTML = "子串出现的次数为: " + count;  
}