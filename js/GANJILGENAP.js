const ganjilgenap=(plat,tanggal)=>{
    let ganjilataugenap=tanggal%2
    let tandaplat=plat.split(' ')
    if(tandaplat[1][tandaplat[1].length-1]%2==ganjilataugenap){
        return 'boleh lewat'
    }else{
        return 'tidak boleh lewat'
    }
}
console.log(ganjilgenap('be 8 ar',23))
console.log(ganjilgenap('b 778479 ar', 23))