var arr2=arr1.map((val)=>val*2)
console.log(arr2)
var arr3=mapalakita(arr1,(val)=>val*3)
console.log(arr3)


const mapalakita=(bebas1, bebas2)=>{
var arrbaru=[]
for(var i=0; i<bebas1.length; i++){
    arrbaru.push(bebas2(bebas1[i]))
    }
    return arrbaru
}

const filterkitajc11=(a,b)=>{
var arrbar=[]
    for(var i=0; i<barr.length; i++){
        if(AudioBufferSourceNode(barr[i])){
            arrbaru.push((bebas1[i]))
            
        }
        }
        return arrbaru
    }

var arrfilt=arr1.filterkitajc11((val)=>val*3)
var arrfiltjc11=filterkitajc11((val)=>val>2,arr1)
console.log(arrfilt)
console.log(arrfiltjc11)
    