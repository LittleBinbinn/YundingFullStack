function receive() {
            var firstString = document.getElementById("string1").value;
            var secondString = document.getElementById("string2").value;
            var i, n, result = 0;
            for (i = 0; i < firstString.length; i++) {
                if (firstString[i] === secondString[0]) {
                    var math = true;
                    for (n = 0; n < secondString.length; n++) {
                        if (firstString[i + n] !== secondString[n]) {
                            break;
                        }
                        if (math) {
                            result++;
                        }
                    }
                }
            }
            document.getElementById("demo").innerHTML = result / secondString.length;
        }

