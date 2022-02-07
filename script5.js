//higher order function
//dapat menyimpan function dalam fuction, seperti pada contoh dibawah ini
// function kerjakanTugas(matkul, selesai){ //function kerjakanTugas adalag higher order function, dan function yang menjadi sebagai argument dinamakan callback
//     console.log(`mulai mengerjakan tugas ${matkul}`);
//     selesai();
// }
// function selesai(){
//     alert('selesai mengerjakan tugas!');
// }

// kerjakanTugas('pemrograman web',selesai);


// function ucapSalam(waktu){ //higher order function karena mengandung return value yang function
//     return function (nama){
//         console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`)
//     }
// }

// let selamatMalam = ucapSalam('Malam');

// console.dir(selamatMalam('Naufal'));


//salah satu contoh higher order lagi
function repeatLog(n,action){
    for(let i=1;i<=n;i++){
        action(i);
    }
}

repeatLog(5, alert);
