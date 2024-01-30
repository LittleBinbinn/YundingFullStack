
   
function commit()
{
    var str = document.getElementById('str').value
    var char = document.getElementById('char').value   
    var count = str.split(char).length - 1//计算字符串中子串出现的次数
    document.getElementById('result').innerHTML = "子串出现的次数为: " +count;
}

