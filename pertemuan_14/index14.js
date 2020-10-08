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
let {name:nama, gender:umur} = user;
console.log(nama, umur);