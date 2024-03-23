//var inputValue = document.getElementById("longStr").name;

function search() {
    // 获取输入值
    let LongStr = document.getElementById("longStr").value;
    let ShortStr = document.getElementById("shortStr").value;
    //创建变量LongStr用来存储longStr中的value值
    //创建变量ShortStr用来存储shortStr中的value值
    
    console.log("longStr的内容是", LongStr);
    console.log("longStr的数据类型是", typeof(LongStr));
    //检验longStr中的内容已传入LongStr,数据类型是字符串

    let length1= LongStr.length;
    console.log("字符串的长度为:", length1);
    let length2 = ShortStr.length;
    console.log("子串的长度为：", length2);

    let cnt = 0;
    //创建计数器

    let i = 0;
    let j = 0;
    

    for (let i = 0; i <= length1 - length2; i++) {
            let judge = true;
        for (let j = 0; j < length2; j++) {
            if (LongStr[i + j] !== ShortStr[j]) {
                judge = false;
                break;
            }
        }
        if (judge) {
            cnt++;
            console.log("i=", i);
            i +=(length2 - 1); 
    }
    }

    let result = cnt;
    console.log("搜索结果是：", result);

    document.getElementById("result").innerHTML=cnt;
}