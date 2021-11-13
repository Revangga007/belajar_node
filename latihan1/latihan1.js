const getUserSync = (id)=>{
    // let nama = '';
    // if(id == 1) {
    //     nama = 'Revangga';
    // } else {
    //     nama = 'aji';
    // }
    const nama = id == 1 ? 'Revangga': 'Aji';
    return {id, nama}
}

const userSatu = getUserSync(1);
console.log(userSatu);

const userDua = getUserSync(2);
console.log(userDua);

const halo = 'Hello World';
console.log(halo);