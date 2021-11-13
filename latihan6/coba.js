function cetakNama(nama) {
    return `halo, salam dari ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
    nama : 'Uzumaki Naruto',
    umur : 18,
    cetakMhs(){
        return `Nama ${this.nama}, umur ${this.umur}`;
    }
}

class Orang {
    constructor(){
        console.log('pesan dari orang');
    }
}
// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// module.exports = {
//     cetakNama : cetakNama,
//     PI: PI,
//     mahasiswa: mahasiswa,
//     Orang: Orang
// }

module.exports = {cetakNama, PI, mahasiswa, Orang};