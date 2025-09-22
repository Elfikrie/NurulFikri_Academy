let produkToko = [
    {id: 1, nama: "Laptop", harga: 7000000, stok: 5},
    {id: 2, nama: "Mouse", harga: 200000, stok: 10},
    {id: 3, nama: "Keyboard", harga: 350000, stok: 7}
]
// Menambahkan produk
let tambahProduk = (id, nama, harga, stok) => {
    let produkTambahan = {id, nama, harga, stok};
    produkToko.push(produkTambahan);
    return produkToko;
}
// Menghapus produk
let hapusProduk = (id) => {
    // FindIndex = untuk menemukan index posisi produk berdasarkan kondisi elemen yang cocok
    let indexProdukId = produkToko.findIndex(produk => produk.id === id);
    if(indexProdukId !== -1){
        produkToko.splice(indexProdukId, 1);
        console.log(`Produk dengan data ${produkToko.indexProdukId} berhasil dihapus`);
        return produkToko;
    } else {
        console.log(`Produk dengan data ${produkToko.indexProdukId} tidak ditemukan`);
    }
}

// Menampilkan Produk
let tampilkanProduk = () => {
    console.log("-------Daftar Produk Toko---------");
    produkToko.forEach(produk => {
        console.log(`Id : ${produk.id}, Nama : ${produk.nama}, Harga : ${produk.harga.toLocaleString()}, Stok : ${produk.stok}`);
    })
}

// Mencetak Hasil
console.log(tambahProduk(4, "Buku", 34000, 5));
console.log(hapusProduk(1));
console.log(tampilkanProduk());
