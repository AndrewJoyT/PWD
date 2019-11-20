

// var a = 'ANDREWJOYT'
// function hurufkecil(a){
//     var output
//         for(i=0; i<a.length;i++){
//             output+=i[a]
//             for(i=0; i<a.length;i++){
//                 output+=i[a]
//             }
//         }
//         return output
//     }
// console.log(a.toLowerCase())

// var b = 'andrewjoyt'
// function hurufkecil(b){
//     var output
//         for(i=0; i<b.length;i++){
//             output+=i[b]
//             for(i=0; i<b.length;i++){
//                 output+=i[b]
//             }
//         }
//         return output
//     }
// console.log(a.toUpperCase())

// // //cara ke 2
// console.log('ANDREWJOY'.toLowerCase())
// console.log('andrewjoy'.toUpperCase())

// var angka  = 'abcdef'.split('')

// console.log(angka);

// var huruf = '123'.split('')
// console.log([...angka,...'g']);

// let halo = function(){
//     console.log('Halo Dunia!')}
// let hai = () => {
//     console.log('Hai Hacker!')}
// let alo = () => console.log('Aloha!')
//  halo(); hai(); alo();

// var bebas = a => 'aku' + a
// console.log(bebas('anak'))

// let x = function () {
// 	console.log('Hai ini X!'); 
// };

// let z = function () {
// 	console.log('Hai ini Z!'); 
// };

// let y = function (callback) {
// 	console.log('Halo ini Y!'); 
// 	callback(); 
// };

// y(x,z);

var w = [0,1,2,3,4,5]

var x = w.filter((val) => val !== 2);
var y = w.filter((val) => val % 2 == 0);
var z = w.filter((val) => val % 2 !== 0);
var nama = w.filter((val) => val !== 'STRING');

console.log(w);
console.log(x);
console.log(y);
console.log(z);

  // ((val) => val % 2 !== 0) artinya
  // ((val) => {return val % 2 !== 0)}

//   var w = [1,4,9,16,25]

//   var x = w.map(Math.sqrt);
//   var y = w.map((val)=> val * 2);
//   var z = w.map((val)=> val!==9);
  
//   console.log(x);
//   console.log(y);
//   console.log(z);

// let janji = new Promise(function(tepati,ingkari){
// 	let dipenuhi = true;
// 	if(dipenuhi){
// 		tepati('Janji Kutepati.');
// 	} else {
// 		ingkari('Janji Kuingkari.');
// 	}
// });

// janji.then(function(janjiDitepati) {
// 	console.log(janjiDitepati);
// }).catch(function(janjiDiingkari) {
// 	console.log(janjiDiingkari);
// })





