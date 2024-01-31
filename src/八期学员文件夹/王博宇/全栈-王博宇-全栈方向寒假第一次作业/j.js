function dete() {
    var num = 0;
    var boo;
    var strs = document.getElementsByName('strs')[0].value;
    var str = document.getElementsByName('str')[0].value;
    var arrstrs = strs.split('');
    var arrstr = str.split('');
    for (var i = 0; i < strs.length; i++)
    {
        boo = true;
        if (arrstrs[i] == arrstr[0])
        {
            for (var p = i + 1; p < i + str.length; p++)
            {
                if (arrstrs[p] != arrstr[p - i])
                {
                    boo = false;
                    break;
                }
                
            }
            if (boo == true)
            {
                num++;
                }
            }
    }
    var arr2 = ['子字符串出现的次数为：', num];
    var arr3 = arr2.join("");
    var empty = document.getElementsByClassName("empty")[0];
    console.log(empty.innerHTML = arr3);
}
