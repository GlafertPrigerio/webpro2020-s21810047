//ARROW Function
// Kelebihan menggunakan arrow function adalah penulisan fungsi menjadi lebih singkat dan lebih mudah dibaca

/* Penulisan Arrow Function 
const namaFungsi = (parameter1, ..., parameterX) => {
    kode yang ingin dijalankan dalam fungsi
  };
  */

  //Arrow function dengan 1 parameter
 const perbandingan = (Student)=>{
    let nilai;
        switch (Student) {
          case "Prigerio":
            nilai = 80;
            break;
          case "Eric":
            nilai = 85;
            break;
          case "Glain":
            nilai = 88;
            break;
          case "Glabrian":
            nilai = 87;
            break;
          default:
            nilai= "Nama tidak ada";
            }
            return nilai;
       }; 
 console.log(perbandingan("Prigerio"));
//Arrow function tanpa parameter
const Random = () => {
  const angka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  return angka[Math.floor(Math.random()*(angka.length))];
}
  console.log(Random());