function countSubstring() 
{
    var char = document.getElementById("stringInput").value;
    var subchar = document.getElementById("substringInput").value;
    var count = 0;
    var i;
    for (i = 0; i <= char.length - subchar.length; i++) 
    {
        if (char.substring(i, i + subchar.length) === subchar) 
        {
            count++;
        }
    }
    
    document.getElementById("number").innerHTML = count;
}