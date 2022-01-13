//object literal
// let player1= {
//     name: 'Sinopla',
//     health: 100,
//     attack : 50,
//     heal: function(potion){
//         this.health = this.health + potion;
//         console.log(`${this.name}'s Health is now ${this.health}`);
//     },
//     buff : function(power){
//         this.attack = this.attack + power;
//         console.log(`${this.name}'s Attack is now ${this.attack}`);
//     }
// }
// let player2= {
//     name: 'Ajax',
//     health: 50,
//     attack : 150,
//     heal: function(potion){
//         this.health = this.health + potion;
//         console.log(`${this.name}'s Health is now ${this.health}`);
//     },
//     buff : function(power){
//         this.attack = this.attack + power;
//         console.log(`${this.name}'s Attack is now ${this.attack}`);
//     }
// }

// //function declaration

// //---Better Alternative
// const methodPlayerTemplate = {
//     sembuh : function(ramuan){
//         this.darah += ramuan;
//         console.log(`Darah ${this.nama} sekarang adalah ${this.darah}`);
//     },
//     perkuat : function(kekuatan){
//         this.serangan += kekuatan;
//         console.log(`Serangan ${this.nama} sekarang adalah ${this.serangan}`);
//     },
//     terserang :  function(serangan){
//         this.darah -= serangan;
//         console.log(`${this.nama} terserang! sekarang darahnya menjadi ${this.darah}`);
//     }
// };
// //Better Alternative---
// //method dibuat object terpisah agar tidak selalu dibuat saat dipanggil (manajemen memory lebih efektif)
// //- drawbacknya adalah kita harus mengelola dua object, jadi apabila dibuat method baru, maka harus dipanggil di fungsinya agar bisa digunakan


// function playerTemplate(nama,darah,serangan){
//     let playertemplate = {};
//     playertemplate.nama = nama;
//     playertemplate.darah = darah;
//     playertemplate.serangan = serangan;
//     playertemplate.sembuh = methodPlayerTemplate.sembuh;
//     playertemplate.perkuat = methodPlayerTemplate.perkuat;
//     playertemplate.terserang = methodPlayerTemplate.terserang;

//     return playertemplate;
// }

// let sinopla = playerTemplate('Sinopla',200,25);
// let ajax = playerTemplate('Ajax',50,200);

// //contructor fuunction
// //keyword new

// function playerConstructor(named,healthed,attacketh){
//     this.named = named;
//     this.healthed = healthed;
//     this.attacketh = attacketh;

//     this.healed = function(potioned){
//         this.healthed += potioned;
//         console.log(`Darah ${this.named} sekarang adalah ${this.healthed}`);
//     },
//     this.buffed = function(powered){
//         this.attacketh += powered;
//         console.log(`Serangan ${this.named} sekarang adalah ${this.attacketh}`);
//     },
//     this.attacked = function(damaged){
//         this.healthed -= damaged;
//         console.log(`${this.named} terserang! sekarang darahnya menjadi ${this.healthed}`);
//     }
// }

// let sinopled = new playerConstructor('Sinopal',200,25);
// let ajaxed = new playerConstructor('Ajxa',50,200);


// //object.create
// //merupakan cara otomatis yang lebih baik lagi dari ---Better Alternative--- pada bagian function declaration yang sudan diubah diatas

// const methodPlayerCreate = {
//     sembuhed : function(ramuaned){
//         this.darahed += ramuaned;
//         console.log(`Darah ${this.namaed} sekarang adalah ${this.darahed}`);
//     },
//     perkuated : function(kekuataned){
//         this.seranganed += kekuataned;
//         console.log(`Serangan ${this.namaed} sekarang adalah ${this.seranganed}`);
//     },
//     terseranged :  function(seranganed){
//         this.darahed -= seranganed;
//         console.log(`${this.namaed} terserang! sekarang darahnya menjadi ${this.darahed}`);
//     }
// };

// function playerCreate(namaed,darahed,seranganed){
//     let playercreate = Object.create(methodPlayerCreate);
//     playercreate.namaed = namaed;
//     playercreate.darahed = darahed;
//     playercreate.seranganed = seranganed;

//     return playercreate;
// }

// let sinopal = playerCreate('Sinopled',200,25);
// let ajaks = playerCreate('Ajed',50,200);



//prototype

// function Player(name, health, attack){
    
//     this.name = name;
//     this.health = health;
//     this.attack = attack;
// }

// Player.prototype.heal = function (healed){
//     this.health += healed;
//     return `${this.name} has healed ${healed} HP!`;
// }

// Player.prototype.buff = function(buffed){
//     this.attack += buffed;
//     return `${this.name} is buffed with ${buffed} attack!`;
// }

// Player.prototype.attacked = function(damage){
//     this.health -= damage;
//     return `${this.name} has been damaged ${damage} point!`;
// }

// Player.prototype.awaken = function(multiplier){
//     this.health = this.health*multiplier;
//     this.attack = this.attack*multiplier;
//     return`${this.name} has awaken with ${multiplier}X multiplier!`
// }

// let sinopal = new Player('Sinopla',100,35);

//----versi class---
//commonly used
class Player{
    constructor(name,health,attack){
        this.name = name;
        this.health = health;
        this.attack = attack;
    }

     heal(healed){
    this.health += healed;
    return `${this.name} has healed ${healed} HP!`;
    }

    buff(buffed){
        this.attack += buffed;
        return `${this.name} is buffed with ${buffed} attack!`;
    }

    attacked(damage){
        this.health -= damage;
        return `${this.name} has been damaged ${damage} point!`;
    }

    awaken(multiplier){
        this.health = this.health*multiplier;
        this.attack = this.attack*multiplier;
        return`${this.name} has awaken with ${multiplier}X multiplier!`
    }
}
let sinopal = new Player('Nopal',75,50);


//bonus
let angka = [2,6,4,2,7];
// console.log(angka.reverse());
// console.log(angka.sort());