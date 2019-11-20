

function gaji(jammasuk,jamkeluar,jabatan){
    var gaji
    if(jabatan=='staff'){
        gaji = 2000 *(jamkeluar-jammasuk)
    }else if (jabatan='ceo'){
        gaji =1000*(jamkeluar-jammasuk)
    }else if (jabatan='manager'){
        gaji =1000*(jamkeluar-jammasuk)
    }else{
        gaji = 'nggak ada gaji'
    }
    return gaji
    }
    console.log('gajinya' + gaji(8,15,'ceo'))  
    console.log(gaji(8,19,'staff'))
    console.log(gaji(8,20,'manager'))