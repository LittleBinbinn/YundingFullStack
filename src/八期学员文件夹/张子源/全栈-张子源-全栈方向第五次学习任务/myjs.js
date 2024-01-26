function count() {
    /* let mu = document.getElementById("mu").value;
        let zi = document.getElementById("zi").value;
        let t3 = "";
        function count() {
            var i = 0, j = 0, k = 0, count = 0;
            for (i = 0; i < mu.length - zi.length; i++) {
                //按照子串的长度依次切割母串并赋值给t3
                for (j = 0; j < zi.length; j++) {
                    t3[j] = mu[i];
                    i++;
                }
                if (t3 === zi) {
                    count++;
                }
            }
            document.getElementById('result').innerHTML == count;
        }
 */
    let mu = document.getElementById("mu").value;
    let zi = document.getElementById("zi").value;
    let muleth = mu.length;
    let zileth = zi.length;
    let count = 0;
    let i = 0, j = 0, k;
    for (i = 0; i < muleth; i++) {
        for (j = 0, k = i; j < zileth && zi[j] == mu[k]; j++, k++){
            if (zi[j] != mu[k]) {
                break;
            } else if (j == zileth - 1) {
                count++
            }
        }
    }
    alert(`${zi}在${mu}中共出现了${count}次!`);
}    