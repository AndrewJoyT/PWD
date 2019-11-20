

// function URUTAN(ANGKA) {
//     var output=''
//     for(i=1; i<ANGKA; i++){
//         if((i)%3==0 &&(i+3)%5==0){
//         output+= ' Purwa '
//         }else if((i)%3==0){
//             output+=' Purwadhika '
//         }else if((i)%5==0){
//             output+=' Dhika '
//         }else
//         output+=(i)+ ' '
//         }
//     return output
// }
// console.log(URUTAN(30))

// buatlah sebuah function yg budi mendapatkan permen 1 setiap hari kelipatan 2, kelipatan 10 dapat 2permen


// var permen=function(hari){
//     let output=0
//     for(i=1; i<=hari; i++){
//         if(i%10==0){
//             output+=2
//         }else if(i%2==0){
//             output-=-1 // atau bisa output+=1
//         }
//     }
//     return output
// }
// console.log(permen(100))

// buat sebuah function yg nerima 1 parameter

// function litres(jam){
//     return Math.floor(0.5*jam)
// }
// var hasil = litres (3)
// // console.log(hasil)


// function PERKALIAN(ANGKA){
//     var OUTPUT = ''
//     for (i=1; i<=20; i++){
//         OUTPUT+= ANGKA + 'X' + i + '=' + (ANGKA*i)  
//         OUTPUT+='\n'
//       }
//       return OUTPUT
//     }
//     console.log(PERKALIAN(10))

function FAKTORIAL(a){  

	 for(i=a;i>0; i--){
		 a*=i
	 }
	return a
}
console.log(FAKTORIAL(5))

/*
var output = 1
	 for(i=1;i<=a; i++){
		 output*=i
	 }
	return output
}
console.log(faktorial(9))
*/

