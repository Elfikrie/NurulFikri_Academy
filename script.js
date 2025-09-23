class Pelanggan {
    constructor(nama, nomorTelepon, kendaraanDisewa){
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null;
    }

    sewaKendaraan(kendaraan) {
        this.kendaraanDisewa = kendaraan;
    }

    getInfo(){
        return `Nama : ${this.nama}, Nomor Telepon : ${this.nomorTelepon}, Kendaraan yang Disewa : ${this.kendaraanDisewa}`
    }
}

let listPelanggan = [];

let tambahPelanggan = (nama, nomorTelepon, kendaraan) => {
    let pelangganBaru = new Pelanggan(nama, nomorTelepon);
    pelangganBaru.sewaKendaraan(kendaraan);
    listPelanggan.push(pelangganBaru);
    return "Pelanggan berhasil ditambahkan";
}

let tampilkanPelanggan = () => {
    console.log("------Daftar Pelanggan yang menyewa kendaraan-------");
    listPelanggan.forEach((e, i) => {
        console.log(`${i + 1}. ${e.getInfo()}`);
    });
}