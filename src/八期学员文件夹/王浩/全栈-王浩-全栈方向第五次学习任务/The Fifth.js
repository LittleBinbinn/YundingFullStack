function test1() {
    let fatherStr = document.getElementById("fatherStr").value;
    let sonStr = document.getElementById("sonStr").value;
    let fatherStrlen = fatherStr.length;
    let sonStrlen = sonStr.length;
    let count = 0;
    let i = 0;
    let j = -1;
    for (i = 0; i < fatherStrlen; i++) {
        j = -1;
        if (fatherStr[i] == sonStr[0]) {
            while (j < sonStrlen) {
                j++;
                if (sonStr[j] != fatherStr[i + j]) {
                    break;

                } else if (j == sonStrlen - 1) {
                    count++;
                }
            }
        }
    }
    let result = count;
    document.getElementById("result").innerHTML = result
}