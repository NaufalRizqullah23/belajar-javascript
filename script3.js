//closure

//lexical scope
//----untuk function factories
//case 1
function init(){
    // let nama = 'Naufal';
    return function(nama){
        console.log(nama);
    }
}
let panggileNama = init();
panggileNama('Sinopal');
panggileNama('Rijkuloh');

//case 2
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

//untuk function factories---

//---untuk private method
//dengan adanya private method, variable dalam method tersebut bisa tidak terganggu, walaupun diluar variablenya di inisiasi ulang
let add = (function(){
    let counter = 0;
    return function(){

        return ++counter;
    }
})();
//agar dapat dijalankan tanpa harus dimasukin lagi, maka...
//... function luar dibungkus dengan immmediately invoke function dengan kurung dan ditutup dengan kurung lagi
// let a = add();

counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());

//untuk private method---