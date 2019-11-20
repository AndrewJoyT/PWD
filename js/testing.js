

// var number = function(array){
//     return array.map((val,index) => (index+1)+ ': ' +val )
// }
// console.log(number(['a','b','c']))
// console.log(number([]))

// KUADRAT
// const kuadrat =  (angka) => {
//     if(Math.sqrt(angka)%1==0){ return true
//     }
//     return false
// }
// console.log(kuadrat(7))

// const countingValley = (x) => {
// }

// function checkpass (str){
//     var hilangSpasi = str.replace(' ', '')
//     if(hilangSpasi.length>5)
//     var arrstring = hilangSpasi.split('')
//     var angka = false
//     var huruf = false
//     for(var i=0; i<arrstring.length; i++){
//         if(arrstring[i]>=0){
//             angka=true
//         }else{
//             huruf=true
//         }
//     }
// }
//     if(angka == true && huruf == true){
//     return 'password benar'
//     }else if (angka == true && huruf == false){
//         return 'Harus ada huruf'
//     }else if (angka == false && huruf == true){
//         return 'Harus ada Angka'
//     }
//     else {
//     return 'Password harus lebih dari 6 dan tidak boleh ada spasi'
//     }


// const timeoutala2=(fn,waktu)=>{
//     for(let i=0;i<=waktu*1000000;i++){

//     }
//     fn()
// }

// timeoutala2(()=>console.log('jc11'),1000)

// function halo(nama) { 
//     console.log('Halo, aku '+nama);} 
 
// function hai(nama) {
//     console.log(`Hai, aku ${nama}`);
//     console.log(`Usiaku ${7*3}`);} 
 
// halo('Andi'); 
// // Halo, aku Andi 
 
// hai('Arif'); 
// // Hai, aku Arif 
// // Usiaku 21 

// const intervalala2=(fn,waktu)=>{
//     for(let i=1;;i++){
//         if(i%(waktu*100000)===0&&i!==0){
//             fn()
//         }
//     }
// }

// intervalala2(()=>console.log('jc11 kece'),1000)

var obj={
    nama:'bobi',
    namabel:'basari'
}
var objgab={
    namabelakang:'roykiyo'
}
var arr=['a','b','c']
var arr1=['d','e','f']
obj.nama='dsadad'
console.log(obj)
// ================ batas///
var obj1={...obj,...objgab}
const {nama,namabel,namabelakang}=obj1
console.log(nama)
console.log(namabel)
console.log(namabelakang)
