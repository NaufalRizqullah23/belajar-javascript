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

//ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));
console.log(videos);
//pilih JAVASCRIPT LANJUTAN
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

//ambil durasi masing masing video
    .map(item => item.dataset.duration)
//ubah durasi menjadi integer
    .map(waktu =>{
        const parts = waktu.split(':').map(part => parseInt(part));

//ubah menit menjadi detik
        return parts[0]*60 + parts[1];
    })
    
//jumlahkan semua detiknya
    .reduce((total,detik) => total+detik);

//ubah format jadi jam:menit:detik
const jam = Math.floor(jsLanjut/3600);
jsLanjut = jsLanjut - jam*3600;
const menit = Math.floor(jsLanjut/60);
const detik = jsLanjut-menit*60;

//simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;

const jlVid = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJlVid = document.querySelector('.jumlah-video');
pJlVid.textContent = `${jlVid} Video`;
console.log(pDurasi);