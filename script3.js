//closure

//lexical scope
function init(){
    let nama = 'Naufal';
    function tampilNama(){
        console.log(nama);
    }
    tampilNama();
}
init();