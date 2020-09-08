//Object

//Mendeklarasikan Objek
//---------------------------------------
//1. Object Literal
const mhs1 = {
    namaDepan: "John",
    namaBelakang: "Doe",
    umur: 31,
    sudahLulus: true,
    alamat : {
        jalan: "jln. Arnold Mononutu",
        kecamatan: "Airmadidi",
        kabupaten: "Minahasa Utara"
    },
    IPSemester: [3.05, 3.25, 3.0, 3,4],
    HitungIPK: Function() {
    let total= 0;
    this.IPSemester.forEach(function(el) {
        total = total + el;
    });
    this.IPKumulatif = total / 4;
    },
};
console.log(mhs1);
// //2. kata kunci New
const mhs2 = new Object();
mhs2.namaDepan = "Jane";
mhs2.namaBelakang = "Smith";

// //---Mengakses properti---------------------
//1.dot notation
console.log(mhs1.umur);
// //2.Bracket Notation
console.log(mhs1['namaBelakang']);
//----------------------------------------

console.log(mhs1.IPSemeseter[1]);
 
//Array Object (JSON)
const mahasiswa = [
    {
        namaDepan: "John",
        namaBelakang: Doe,
    },
    {
        nim: "002"
        namaDepan: "Jaen",
        namaBelakang: "Doi",
    },
    {
        nim: "003"
        namaDepan: "Glafert",
        namaBelakang: "Kapahang",
    },
];

mahasiswa.forEach(function (el){
    console.log(el);
});