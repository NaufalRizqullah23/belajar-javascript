// Function Expression

// const tampilNama = function (nama){
//     return `halo, ${nama}`;
// }
// console.log(tampilNama('Naufal Rizqullah'))

// arrow function
// jika parameternya hanya satu, tidak perlu menggunakan kurung
// const tampilNama = nama =>{
//     return `halo, ${nama}`;
// }
// console.log(tampilNama('Doddy Tabuti'));


// const sapaNama = (nama,waktu)=> `selamat ${waktu},${nama}`;
//     // kalau isi functionnya hanya return saja, maka tidak perlu menggunakan return (implicit return)
//     // kalau isi functionnya hanya satu baris, maka tidak perlu menggunakan bracket
// console.log(sapaNama('Otis','Malam'));

// const hello = ()=>'Hello World';
// console.log(hello());

//case 2
// let mahasiswa = ['Naufal Rizqullah','Satot Berlian','Paman Farhan','Paniii'];

// //function biasa
// let jumlahHuruf = mahasiswa.map(function(nama){
//     return nama.length;
// })
// console.log(jumlahHuruf);

// //arrow function
// let hurufJumlah = mahasiswa.map(nama => nama.length);
// console.log(hurufJumlah);

// //membuat object dalam arrow function
// let tabel = mahasiswa.map(nama =>({nama, jmlHuruf:nama.length}));
// //di javascript yang baru kalau mau mengembalikan object yang property sama dengan nilainya, maka cukup ditulis
// //sekali, seperti pada object 'nama' diatas
// console.table(tabel);


//konsep this pada arrow function
//Constructor Function
// const Mahasiswa = function(){
//     this.nama = 'Naufal Rizqullah';
//     this.umur = 20;
//     this.sayHello = function(){
//         console.log(`Halo nama saya ${this.nama}, dan saya ${this.umur} tahun!`);
//     }
// }
// const Naufal = new Mahasiswa();

//arrow function
// const Mahasiswa = function(){
//     this.nama = 'Naufal Rizqullah';
//     this.umur = 20;
//     //method bisa diubah ke bentuk arrow function, tp constructor function tidak bisa diubah ke arrow function
//     this.sayHello = () =>{
//         console.log(`Halo nama saya ${this.nama}, dan saya ${this.umur} tahun!`);
//     }
// }
// const Naufal = new Mahasiswa();

//object literal
// const Mhs1 = {
//     nama : 'Naufal Rizqullah',
//     umur : 20,
//     sayHello : () => {
//         console.log(`halo, nama saya ${this.nama} umur saya ${this.umur} tahun`);
//         //maka hasil yang muncul akan undefined, karena konsep this tidak ada pada arrow function
//     }
// }

//next case
// const Mahasiswa = function(){
//         this.nama = 'Naufal Rizqullah';
//         this.umur = 20;
//         this.sayHello = function(){
//             console.log(`Halo nama saya ${this.nama}, dan saya ${this.umur} tahun!`);
//         }
//         setInterval(()=>{
//             console.log(this.umur++);
//         },500)
//     }
//     const Naufal = new Mahasiswa();
    

//next case

const box = document.querySelector('.box');
box.addEventListener('click', function(){
    let satu ='size';
    let dua = 'caption';

    if(this.classList.contains(satu)){
        [satu,dua] = [dua,satu]
    }

    this.classList.toggle(satu);
    setTimeout(()=>{
        this.classList.toggle(dua);
    }, 600);
});