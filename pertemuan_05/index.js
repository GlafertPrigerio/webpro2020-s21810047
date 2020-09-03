/* Array : Variabel yang bisa menampung lebih dari satu nilai. */
/*Contoh-------- */ 
let hari = ['minggu','senin','selasa'];
let angka = [1,2,3];

let campur = ["Minggu" ,1, true]
console.log(campur)

let myFunct = function () {
    return "Hello Array";
};

/*Mengakses element dalam array*/
let arr2 = ["text", 1, true, myFunct()];
console.log(arr2[3]);

console.log(arr2.length);
console.log(typeof arr2);

//Deklarasi menggunakan kata kunci new
let buah2 = new Array ("Salak", "Jambu", "Melon");
console.log(buah2[2]);

//Memanipulasi Array
//--------------------------//
//1. Menambah isi Array

let mhs = [];
mhs[0] = "Glafert";
mhs[1] = "Bob";
mhs[2] = "Jane";

console.log(mhs);

//2. Mengubah isi Array
mhs[1] = "Donny";
console.log (mhs);

//3. Menghapus
mhs[2] = undefined;
console.log(mhs);


for (let i=0;i< mhs.length;i++){
    console.log("Mahasiswa ke=" + (i + 1) + "adalah " + mhs[i]);
}
/*
Method dalam array
==================
1.length - mengetahui jumlah elemen dalam array
2.toSring*/
let mhs1 = ["john", "glafert","Bob"];
//console.log(mhs1.toString);

//3.join 
console.log(mhs1.join(" - "));
//4.push, pop, unshift, shift
mhs1.push("mayra");
mhs1.pop("maya");
console.log(mhs1);
//5.concat
let buah = ["mangga", "Pisang", "jeruk"];
let sayur= ["Kangkung", "bayam"];

let makanan = sayur.concat(buah)//gabungkan 2 array
console.log(makanan.join(" - "))
//6.splice, slice
//a. splice

let buah1 = ["Semangka","Mellon","Apel","Jeruk"]
buah.splice(2, 0, "Mellon", "Semangka");
console.log(buah1.join(" - "))

//b. slice
//let buah3 = ["Semangka","Mellon","Apel","Jeruk"]
//buah3 = buah1()
//console.log(buah3.join(" - "));
//7.forEach, map
//a. forEach
let angka1 = [1, 2, 3, 4, 5, 6, 7, 8];

let tampilAngka = function (el){
return el;
};
//sort

let angka4 = [1,40,6,811,2,7]
angka4.sort(function (a, b){
return a - b;
});
console.log(angka4);
//filter
let lebihBesar = angka4.filter(function (el){
    return el > 2;
});
console.log(lebihBesar);
