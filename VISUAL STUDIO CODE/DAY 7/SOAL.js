function PERKALIAN(ANGKA){
    var OUTPUT = ''
    for (i=1; i<=20; i++){
        OUTPUT+= ANGKA + ' pangkat ' + i+  ' = ' + (ANGKA**i)  
        OUTPUT+='\n'
      }
      return OUTPUT
    }
    console.log(PERKALIAN(10))
    
// function PANGKAT(a,pang){
//     if(pang==0){
//         return 1
//     }else {
//         var output = a
//         for(i=0; i<pang-1; i++){
//             output*=a
//         }
//         return output
//     }
// }
// console.log(PANGKAT(10,5))

// var x = setInterval(waktu, 100);
// var time = 20
// function waktu(){
//     console.log(time);
//     time -=1
//     if(time==0){
//         clearInterval(x)
//     }
//     }
    
