const { tulisPertanyaan,simpanData } = require("./contacts");

const main = async()=>{
    const nama = await tulisPertanyaan("Masukkan nama anda :");
    const email = await tulisPertanyaan("Masukkan email anda :");

    simpanData(nama, email);
}

main();
