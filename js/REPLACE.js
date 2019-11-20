function getdomain(input){
    var psah = input.split('/')
    var akhir = pisah[2].split('.')
    var output = ''
    if(akhir.length==2){
        output+=akhir[0]
    }else {
        output+=akhir[1]
    }
    return output
}

console.log(getdomain("http://github.com/carbonfive/raygun"))
console.log(getdomain("http://www.google.com"))
console.log(getdomain("http://www.cnet.com"))