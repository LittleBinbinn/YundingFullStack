function fn1(){  
    const  a =document.getElementById("str1").value 
    const  b =document.getElementById("str2").value 
    const  c =document.getElementById("str3")
    let count=0
    for(let i=0;i<a.length;i++){
        let pan=true
        for(let j=0;j<b.length;j++){
            if(a[i+j]!==b[j]){
                  pan=false
            }
        }
        if(pan){
            count ++
        }
    }
    c.value = count;
    }