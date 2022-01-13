//2.1 execution context, hoisting, dan scope
// console.log(name);
// var name = 'Naufal Rizqullah';

//creation phase pada Global Context
//nama var = undefined
//nama function = fn()
//konsep dinamakan hoisting
//ps: tp sekarang mah udh bisa walaupun console.log()nya diatas var jg

//kalau script kosong, lalu pada console diketik,
//window = global project
//this = window


//execution phase

// var nama = 'Sinopal';
// var umur = 20;
// console.log(sapa());
// function sapa(){
//     return(`Halo ${nama} yang berumur ${umur} tahun! apa kabs?`);
// }


//function membuat local Execution Context
// yang didalamnya terdapat creation dan execution phase
//window
//arguments
//hoisting

//---konsep scope
var nama = 'Naufal Rizqulah';
var ig = 'naufalrizqullah23';

function cetakURL(ig){
    var instaURL = 'https://instagram.com/';
    return instaURL+ig;
}

console.log(cetakURL('himatifuinbandung'));
//konsep scope---

function a(){
    console.log(`ini a`);

    function b(){
        console.log(`ini b`);

        function c(){
            console.log(`ini c`);
        }
        c();
    }
    b();
}
a();