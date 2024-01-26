//当按下提交按钮时，进行如下函数的操作
var submmit=document.getElementById("sub");
submmit.onclick = function()
{
var input_one=document.getElementById("strone");
var input_one_value=input_one.value
// console.log(input_one_value)//获取输入框中的元素
var num_one=input_one_value.length
console.log("您输入的字符串的长度为",input_one_value.length)//计算输入的字符串中字母的个数
var input_two=document.getElementById("strtwo");
var input_two_value=input_two.value
// console.log(input_two_value)//获取输入框中的元素
var num_two=input_two_value.length
console.log("您输入的子字符串的长度为",input_two_value.length)//计算子字符串其中的字母个数
var over=document.getElementById("result")
var count=0
    for(var j=0;j<num_one;j+=1)
    {
        var i=0
        if(input_one_value[j]===input_two_value[i])
        {
            do{i++}
            while(input_one_value[j+i]===input_two_value[i]&&i<num_two)
            if(i==num_two){
                count+=1
            }
        }
    }
    document.getElementById("result").innerHTML = count; //在特定于元素处输出结果
}








