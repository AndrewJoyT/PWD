const minMax = (arr=[],cond)=>{
    arr.sort((a,b)=>a-b)
    if(cond=='min'){
        return arr[0]
    }else {
    return arr[arr.length-1]
    }
}
console.log(minMax([200,1,0.2,3,45,6,3,45,6],'max'))

