/*JavaScript Conditional (Persyaratan)
------------------------------- */
//1. If, Else, Else if
   //a. if
let Cari1 = "Glafert";

let customer1 = {
    nameCustomer: 'Glafert',
    biodata:{
      address:'Kotamobagu',
      street: 'Jln.Zebra'
    },
    HasilCari:function(){
      if (this.nameCustomer == Cari1) {
        console.log(this.biodata.address);
      }
    }
  }

    //b. Condition Else if
  let Cari2 = "Glafert";
  let customer2 = {
    nameCustomer1: 'Svent',
    biodata1:{
      address:'Bolaang Mongondow',
      street: 'Jln.Ahmad Yani',
            },
      customerName2: 'Glafert',
      biodata2:{
        address:'Tomohon',
        street: 'Jln.Mandagi',
              },
    Hasil:function(){
        if (customer2.nameCustomer1 == Cari2) {
          console.log(this.biodata1.address)
            }
        else if (Cari2 == customer2.customerName2) {
          console.log(this.biodata2.address)
        }
        else {
            console.log("Nama "+ Cari2 +" Tidak ada di dalam database")
            }
          }
     }; 
customer1.HasilCari();
customer2.Hasil();
//2. Switch Case

  // studentName: 'Prigerio',
    // nilai: 80,
    //   studentName: 'Eric',
    // nilai: 90 ,
    // studentName: 'Glain',
    // nilai: 80,
    //   studentName: 'Gladrin',
    // nilai: 90 ,
    // studentName: 'Edson',
    // nilai: 80,
    //   studentName: 'Glabrian',
    // nilai: 90 ,
  function perbandingan() {
  let nilai;  
  let Student = "Prigerio";
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
          console.log(nilai);
     }; 
customer1.HasilCari();
customer2.Hasil();
perbandingan();

/*JavaScript Looping (Persyaratan)
------------------------------- */
//a. For Loop
for (let i = 10; i <= 20; i++) {
  console.log(i)
};

//b. For/In Loop
const Student = {
  Name: "Glafert",
  Nilai: "90",
};
for (a in Student) {
 console.log(a, ':', Student[a]);
}

//c. For/Of Loop
const Hari = ["Minggu",  
   "Senin","Selasa","Rabu","Kamis","Jumat" ,
   "Sabtu"
];

for (a of Hari) {
  console.log(a);
}

//d. While Loop
let Ne = {
  Nama : "Glafert",
  PR : 0,
};

while (Ne.PR <9)
{Ne.PR++;
  console.log("Selamat " + Ne.Nama + " Mengerjakan tugas ke " + Ne.PR);
};

// e. Do while loop
let ai = 0;
const nama = "Glafert"
do {
  console.log("Selamat " + nama + " Mengerjakan tugas ke " + ai);
  ai++;
 } 
while (ai <= 10);

