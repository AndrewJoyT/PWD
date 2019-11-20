// var orang = {
//     namaDpn:'Andi',     
//     usia:50, 
//     pekerjaan:'Politisi',
//     namaFull: function() {
//         return this.namaDpn + " " + " Karno"+this.usia;}
// };
// console.log(orang.namaDpn)
// var namadepan='namaDpn'
// var namaandi=orang.namadepan
// var {namaDpn}=orang
// orang.namaDpn='eza'


// console.log(orang[namadepan])
// console.log(namaDpn)
// console.log(namaDpn)

// function orang(awal, akhir, usia) {
//     this.nama = [awal, akhir];
//     this.usia = usia;
// }

// var Andi = new orang ('Andi','Susilo',20);

// console.log(Andi)
// console.log(Andi.nama[0]) 
// console.log(Andi.nama[1])

// var orang = {
// 	namaDpn : "Andi", 
// 	namaBlk : "Susilo",
// 	usia : 50,
// 	namaFull : function() {
// 		return this.namaDpn + " " + 		this.namaBlk;
// 	} 
// };
// console.log(orang.namaFull)
// console.log(orang.namaFull())

// function Orang(nama, lahir, job) {
// 	this.nama = nama;
// 	this.lahir = lahir;
// 	this.job = job;
// }
// Orang.prototype.marga = 'Hasibuan';
// Orang.prototype.usia = function() {
//     return 2017 - this.lahir;
// };

// var budi = new Orang('Budi', 1992, 'PNS');
// console.log(budi.marga);
// console.log(budi.usia());

var kelas='jc13'
var namamurid=kelas=='jc11'?'farhan':kelas=='jc12'?'budi':'bambang'
//jika kelas = jc11 maka farhan, jika kelas jc12 maka budi, maka bambang
console.log(namamurid)

