// // function sum(a){
// //     var output=0
// //     for(i=0;i<a.length;i++){
// //         output+=a[i]
// //     }
// //     return output/a.length
// // }
// // console.log(sum([5,5,5,10]))

// function sumstring(a){
//     var newarr=a.split('')
//     var output=0
//     for(i=0;i<newarr.length;i++){
//         output+=parseInt(newarr[i]) 
//     }
//     return output
// }
// // console.log(sum([1,2,3,4]))
// // console.log(sum('1234'))

// console.log(sumstring('12343244212312'))
// // //sum 



// let buah = ['Jeruk','Nanas','Apel']; 

// // buah.splice(2, 0, 'Lemon', 'Kiwi');
// // console.log(buah) 
 
// buah.splice(2, 1);
// console.log(buah) 
 
// delete buah[0];
// console.log(buah)

//soal pertama
// function hariIni() {
//     var hari = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu']
//     var bulan = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
//     var tanggal = new Date();

//     output = (hari[tanggal.getDay()]) + ', ' +tanggal.getDate()+ ' '+(bulan[tanggal.getMonth()]) + ' '+tanggal.getFullYear()

//     return output
// }
// console.log(hariIni())

// soal pertama jawaban ke dua
// function hariIni() {
//     // var hari = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'] 
//     var hari= "Minggu Senin Selasa Rabu Kamis Jumat Sabtu Minggu".split(' ')
//     // var bulan = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
//     var bulan = "januari februari maret april mei juni juli agustus september oktober november desember".split(' ')
//     var tanggal = new Date();

//     return  (hari[tanggal.getDay()]) + ', ' +tanggal.getDate()+ ' '+(bulan[tanggal.getMonth()]) + ' '+tanggal.getFullYear()   
// }
// console.log(hariIni())

//soal kedua jawaban pertama
// function cekArray (searchValue,start) {
//     var isiArray = ['Anton','Rijal','Joy','Aris']
//     for ( var i=0;i<isiArray.length;i++) {
//         if (isiArray[i]==searchValue && (isiArray<=i || start == undefined )) {
//             return true 
//             // console.log('aaa');
            
//         } 
//     } return false
// }
// console.log(cekArray('ijal'))

//soal kedua jawaban kedua 
var kata = 'hello'

const includeFunc = function(a='', b) {
    if (b.length==1) {
        for(var i = 0; i < a.length; i++){
            if (b == a[i]) {
                return true
            }
        }
        return false
    }
    else{
        for(var i = 0; i < a.length; i++){
            if (b==a.substr(i,b.length)) {
                return true
            }
        }
    }
    return false
}
console.log(includeFunc(kata, 'ell'))
