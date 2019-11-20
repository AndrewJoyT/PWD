
var TOTALHARI = 485

var TAHUN = Math.floor(TOTALHARI/360)
TOTALHARI = TOTALHARI % 360

console.log (TAHUN + ' TAHUN')

var BULAN = Math.floor(TOTALHARI/30)
TOTALHARI = TOTALHARI % 30

console.log (BULAN + ' BULAN')


var HARI = TOTALHARI
console.log (HARI + ' HARI')
