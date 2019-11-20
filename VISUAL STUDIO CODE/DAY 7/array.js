// function sum(a){
//     var output
//     for(i=0; i<a.length;i++){
//         output+=a[i]
//     }
//     return output
// }
// console.log(sum([1,2,3,4,]))

// function kali(x) {  
//      if (x < 2) {return 1;}  
//      else {return (x * tiga());} 
//     } 
     
//     function tiga(){ 
//         return 3;
//     } 
     
//     console.log(kali(5)) 

// MENCARI RATA2 NILAI MAHASISWA
// function average(SCORES){

    // var TOTAL = 0;
    // SCORES.forEach(function(score) {
    // TOTAL += score;
    // });
    // var avg = TOTAL/SCORES.length
    // return Math.round(avg);
    // }
    // console.log("RATA-RATA NILAI MAHASISWA: ");
    // var SCORES = [90,89,89,100,100,86,94,88,78,90];
    // console.log(average(SCORES));


//     //MENCARI NILAI RATA2 ARRAY
// function sum(a){
// var output = 0
// for(i=0; i<a.length; i++){
// output+=a[i]
// }
// return output/a.length
// }
// console.log(sum([5,5,5,10]))

// //CARA MEMBUAT STRING MENJADI NUMBER DAN MENJUMLAHKANNYA
// function sumstring(a){
//     var newarr=a.split('')
//     console.log(newarr)
//     var output=0
//     // BISA DI PARSEINT SEPERTI INI 
//     // output+=parseInt(newarr[0])
//     // output+=parseInt(newarr[1])
//     // output+=parseInt(newarr[2])
//     // output+=parseInt(newarr[3])
//     // output+=parseInt(newarr[4])
//     for(i=0; i<newarr.length; i++){
//         output+=parseInt(newarr[i])
//     }
//     return output
// }
// console.log(sumstring('12345'))

//CARA MENCARI ARRAY DALAM SEBUAH ARRAY
let mobil=['Xenia','Alya','Avanza','Altis','1222','@@@']
function checknama(bambang){
    for(i=0; i<mobil.length; i++){
    if(mobil[i]==bambang){
        return true
        }
        return false
    }
}
console.log(checknama('Xenia'))
