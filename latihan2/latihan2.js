const getUser = (id, callback) => {
    const time = id === 1 ? 3000 : 2000;
    setTimeout(()=>{
        const nama = id === 1 ? 'Revangga' : 'Aji';
        callback({id, nama}); 
    },time);
}

const userSatu = getUser(1, (result)=>{
    console.log(result);
});

const userDua = getUser(2, (result)=>{
    console.log(result);
});

const halo = 'Hello world';
console.log(halo);