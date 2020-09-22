//Let, Const, Var
//Perbedaan dari deklarasi

var nama ="Glafert";
var nama ="Prigerio";

console.log(nama); //output variabel nama akan di tindih.


//Perbedaan dari segi scope
//Function Scope (var)
(function test(){
for (var i=0;i<10;i++){
    console.log(i)
}
})();
//Block Scope (let, const)
{  let nama1 = " Glafert "

console.log(nama1);//output variabel nama tidak bisa di akses di luar block
}
//template literal
let nama2 = "Glafert";
let umur = 19;

let show = `Nama saya adalah ${nama2}. umur saya adalah ${umur}.`

console.log(show);