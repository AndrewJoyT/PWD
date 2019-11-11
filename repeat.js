const repeat=(a=['z','b','a','b','a','x','a'])=>{
    for(var i=0; i<a.length; i++){
        for(var j=i+1; j<a.length; j++){
        if(a[i]==a[j]){
            return a[i]
            }
        }
    }
}
console.log(repeat())