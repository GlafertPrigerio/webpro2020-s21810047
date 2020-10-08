/* DESTRUKTURISASI */

//Destukturisasi Array
let abjad = ["a", "i", "u", "e", "o"]
let [vokal1, vokal2, vokal3, vokal4, vokal5] = abjad;
console.log(vokal1);

//Dekonstruksi Object
let user = {
    name: "Glafert",
    gender: "Male",
    age: 19,
};

let (nama, umur) => {
    let{nama, umur} =user;
console.log(`nama saya adalah ${nama}, umur saya adalah ${umur}`);
}


// const display =(name, age)=> {
//     let name [name, age] = user; 
//     console.log(`nama saya adalah ${name}`)
// }

//Array object

//kombinasi Rest Operator

const colors = ["merah", "Kuning"];

let [satu, ...lainya] = colors;

console.log(satu);
console.log(lainya);