//closure

//lexical scope
//----untuk function factories
function init(){
    // let nama = 'Naufal';
    return function(nama){
        console.log(nama);
    }
}
let panggileNama = init();
panggileNama('Sinopal');
panggileNama('Rijkuloh');
//untuk function factories---


//untuk private method

function ucapSalam(waktu){
    return function(name){
        console.log(`Selamat ${waktu} ${name}! semoga tuhan bersamamu`);
    }
}

let waktuPagi = ucapSalam('pagi');
let waktuSiang = ucapSalam('siang');
let waktuMalam = ucapSalam('malam');

waktuPagi('Naufal Rizqullah');
waktuSiang('Naufal Rizqullah');
waktuPagi('Ajax');