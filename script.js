// Data Produk
let produkList = [
    {id: 1, nama: "Laptop", harga: 12000000},
    {id: 2, nama: "Smartphone", harga: 5000000},
    {id: 3, nama: "Headset", harga: 300000},
    {id: 4, nama: "JamTangan", harga: 250000},
    {id: 5, nama: "Televisi", harga: 5000000}
];
// Menambahkan Produk
let tambahProduk = (id, nama, harga) => {
    console.log("-------Produk berhasil ditambahkan-------------")
    const produkBaru = {id, nama, harga};
    produkList = [...produkList, {...produkBaru}];
    return tampilkanProduk();
}
// Menghapus Produk
let hapusProduk = (id) => {
    let indexProdukId = produkList.findIndex(produk => produk.id === id);
    if(indexProdukId !== -1){
        produkList.splice(indexProdukId, 1);
        console.log(`Produk dengan data id ${id} berhasil dihapus`);
        return tampilkanProduk();
    } else {
        console.log(`Produk dengan data id ${id} tidak ditemukan`);
    }
}

// Menampilkan Produk dengan destructing
let tampilkanProduk = () => {
    console.log("-----------List Produk-------------")
    for(const{ id, nama, harga} of produkList){
        console.log(`ID: ${id}, Nama: ${nama}, Harga: Rp. ${harga.toLocaleString()}`)
    }
}

// DOM
let tombolTambahProduk = document.getElementById("tambahProduk");
let tombolHapusProduk = document.getElementById("hapusProduk");
let tombolTampilkanProduk = document.getElementById("tampilkanProduk");

tombolTambahProduk.addEventListener("click", () => tambahProduk(6, "Hp", 12000000));
tombolTambahProduk.addEventListener("click", () => tambahProduk(7, "Hp", 12000000));
tombolHapusProduk.addEventListener("click", () => hapusProduk(3));
tombolTampilkanProduk.addEventListener("click",  () => tampilkanProduk());

// tambahProduk(6, "Hp", 12000000);
// console.log(hapusProduk(5));
// tampilkanProduk();