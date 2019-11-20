
function latihan(num=0){
    var str=String(num).split('')
    var output = ''
    for(i=0; i<str.length; i++){
        str[i]=parseInt(str[i])
        output+=str[i]*Math.pow(10,str.length-1-i)
        if(i<str.length-1){
            output+='+'
        }
    }
    return output
}
console.log(latihan(98765))

// function jc11(a){

//     return [1,2,function(){
//         return a
//     }(),4,5][2]
// }
// console.log(jc11(10))
// var arrnew=[1,2,3]
// var arr=[1,2,3][1]
// console.log(arr)
// function jc11(){
//    }
