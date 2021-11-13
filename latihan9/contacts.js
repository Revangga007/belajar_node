// import file system
const fs = require('fs');
// import readline
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// lokasi directory path
const dirPath = './data';

// Validasi folder data
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

// cek file contacts.json
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const tulisPertanyaan = (pertanyaan)=>{
    return new Promise((resolve, reject) =>{
        rl.question(pertanyaan, (nama) =>{
            resolve(nama);
        });
    });
}

const simpanData = (nama, email) => {
    const contact = {nama, email};
    const contacts = JSON.parse(fs.readFileSync('./data/contacts.json', 'utf-8'));
    contacts.push(contact);
    fs.writeFile('./data/contacts.json', JSON.stringify(contacts), () => {
        console.log(`Data ${nama} berhasil ditambah`);
        rl.close();
    });
}

module.exports = {tulisPertanyaan, simpanData}