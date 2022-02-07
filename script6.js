// filter, map & reduce
//<====================>

// const angka = [-1,2,5,-3,7,-9,0,3,7,-5,6,-8];
// console.log(`Array Awal = ${angka}`);
//mencari angka yang >=5
//menggunakan for
// const newAngka = [];
// for(let i=0;i<angka.length;i++){
//     if(angka[i]>=5){
//         newAngka.push(angka[i]);
//     }
// }
// console.log(`setelah filer = ${newAngka}`);

//FILTER
// const newAngka = angka.filter(a=> a>=5);
// console.log(`setelah filter = ${newAngka}`);


// MAP
//kalikan semua isi array "angka" dengan 2
// const newAngka = angka.map(a=> a*2);
// console.log(`setelah dikali 2 = ${newAngka}`);

//REDUCE
//jumlahkan seluruh elemen pada array
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator+currentValue, 0 ); //0 disitu adalah angka awal
// console.log(`setelah dijumlahkan semua = ${newAngka}`);

//METHOD CHAINING
//cari angka > 3
//kalikan 5
// jumlahkan semua
// const hasil = angka.filter(a => a>3)
//     .map(a => a*5)
//     .reduce((acc,cur)=> acc+cur,0);
// console.log(`setelah method chaining = ${hasil}`);


//<===============LATIHAN=================>

