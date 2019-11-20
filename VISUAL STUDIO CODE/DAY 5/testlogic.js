// function namaku(nama) {
//     console.log (nama+' kontol');
// }

// namaku('Adi');
// namaku('Budi');
// namaku('Caca');
// namaku('Dedi');

// function data(x,z) {
//     console.log (x+' Lahir th '+y);
//   }
  
//   data('Adi','1990');
//   data('Budi','1991');
//   data('Caca','1992');
//   data('Dedi','1993');
  
// function total(x,y) {
// 	z = x + y
// 	return z
// }
// console.log(total(4,5))



function Pangkat(x,y){
    if (y == 1) {
        return x;
    }
    else {
        return x=x*Pangkat(x,y-1);
    }
}
console.log(Pangkat(7,2))



