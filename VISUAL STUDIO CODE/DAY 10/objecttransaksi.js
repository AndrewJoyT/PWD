class Produk {
    constructor(namaproduk, harga) {
        this.namaproduk=namaproduk;
        this.harga=harga
    }
}

var Produk = [
    new Produk ('Anggur',1000),
    new Produk ('Apel',2000),
    new Produk ('Jeruk',5000)
            ]

class CartUser {
    constructor (namaproduk,harganya, qty) {
        this.namaproduk=namaproduk,
        this.harganya=harganya,
        this.qty=qty
    }
}

var cart=[]