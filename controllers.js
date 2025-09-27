let { users} = require("./data");

// Menampilkan semua data
let index = () => {
    users.map(e => {
        console.log(e);
    })
}

let store = (nama, umur, alamat, email) => {
    const newUsers = {nama, umur, alamat, email};
    users = [...users, {...newUsers}];
    console.log(`-----------Menambahkan users baru----------`);
    index();
}

// Menampilkan data tertentu
const view = (position) => {
    console.log("---------------Menampilkan data tertentu---------------")
    console.log(users[position]);
}

// Menghapus data
let destroy = (position) => {
    users.splice(position, 1);
    console.log(`-------Data pada index ke ${position} berhasil dihapus-------`) ;
}


module.exports = {index, store, view, destroy};