function string() {
    let string = document.getElementById("string").value;
    let sonstring = document.getElementById("sonstring").value;
    let stringlen = string.length;
    let sonstringlen = sonstring.length;
    let i;
    let j;
    let isfind;
    let count = 0;
    var display= document.getElementById("display");
    for (i = 0; i < stringlen; i++)
    {
        if (string[i] == sonstring[0])
        {
            isfind = 1;//假定找到了
            for (j = 0; j < sonstringlen; j++)
            {
                if (string[i + j] != sonstring[j])
                {
                    isfind = 0;
                    break;
                    }
                }
        }
        if (isfind == 1)
        {
            count++;
            isfind = 0;
            }
    }
    display.innerHTML = count;
    return;
    

}