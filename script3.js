//closure

//lexical scope
function init(){
    // let nama = 'Naufal';
    return function(nama){
        console.log(nama);
    }
}
let panggileNama = init();
panggileNama('Sinopal');