// Core Module
// File System
const fs = require('fs');

// Menuliskan string ke file (Synchronous)
// percobaan 1
// fs.writeFileSync('test.txt', 'Hello world secara sync'); 

// Percobaan 2
// try {
//     fs.writeFileSync('data/test.txt', 'ini string percobaan 2');
// } catch (e) {
//     console.log(e);
// }

// Percobaan 3
// try {
//     fs.writeFileSync('data/test.txt', 'ini string percobaan 3');
// } catch (e) {
//     console.log(e);
// }

// Percobaan 4 secara Async
// fs.writeFile('data/test2.txt', 'percobaan secara asyc', (e)=> console.log(e));

// Percobaan 5 read sync
// const test = fs.readFileSync('data/test2.txt', 'utf-8');
// console.log(test);

// Percobaan 6 read async
fs.readFile('data/test2.txt', 'utf-8', (err,data)=> {
    if(err) throw err;
    console.log(data);
});