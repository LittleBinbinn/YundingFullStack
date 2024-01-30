document.getElementById('submit').addEventListener('click', function () {
    let string1 = document.getElementById('string1').value;
    let string2 = document.getElementById('string2').value;
    let count = 0;
    let cutOut = (str, start, end) => {
        let newString = '';
        for (let i = start; i < end; i++) {
            newString += str[i];
        }
        return newString;
    }
    let len1 = string1.length;
    let len2 = string2.length;
    for (let j = 0; j < len1; j++) {
        let string3 = cutOut(string1, j, j + len2);
        if (string3 === string2) {
            count++;
        }
    }
    document.getElementById('result').innerHTML = count;
} )




































