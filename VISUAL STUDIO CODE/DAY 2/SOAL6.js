
var X = new Date()
console.log('Hari ini tanggal ' + (X.getDate() + '-' + (X.getMonth()+1)) + '-' + X.getFullYear())
console.log('Besok tanggal ' + (X.getDate()+1) + '-' + (X.getMonth()+1) + '-' + X.getFullYear())
console.log('Kemarin tanggal ' + (X.getDate()-1) + '-' + (X.getMonth()+1) + '-' + X.getFullYear())

  