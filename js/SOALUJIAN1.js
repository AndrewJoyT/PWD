function accum(huruf=''){
    var output = ''
    for(var i=0; i<huruf.length; i++){
        output+=huruf[i].toUpperCase()
        for(var j=0; j<i; j++){
            output+=huruf[i].toLowerCase()
        }
        if(i<huruf.length-1){
            output+='-'
        }
    }
    return output
}

console.log(accum('abcd'))
console.log(accum('cwAt'))
console.log(accum('RqaEzty'))