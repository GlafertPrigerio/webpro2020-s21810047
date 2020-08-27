/* 
1. function Declaration
*/
function penjumlahanDuaBujurSangkar(a, b) {
    let luasA = a * a;
    let luasB = b * b;

    let total = luasA + luasB;

    return total;
}
const hasil = penjumlahanDuaBujurSangkar (1 , 3)
console.log(hasil);

/* 
Refactoring

menghilangkan bagian yang tidak perlu
*/

function penjumlahanDuaBujurSangkar(a, b) {

    let total = a * a + b * b;

    return total;
}
const hasil2 = penjumlahanDuaBujurSangkar (1 , 3)
console.log(hasil);

function tambah (a, b){
    return a + b;
}
function kali(a , b){
let hasilKali = a * b;

return hasilKali;
}
console.log(tambah(kali(5,2),kali (10,2)));

/* hoisting = bisa di di atas deklarasi
---------------------------------------
 */


/* function Expresion 
-----------------------------------------*/

const luasSegitiga = function Aritmetik (a, b , c) {c
let stengah = 0,5;
    let total = stengah * b * c;
    console.log(aritmetik(1,2,3));
    return total;
 
}
console.log(luasSegitiga(1,2,3);
