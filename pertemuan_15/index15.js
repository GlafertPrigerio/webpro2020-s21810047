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

const display = ({name, age }) => {
console.log(`nama saya adalah ${name}, umur saya adalah ${age}`);
}


// const display =(name, age)=> {
//     let name [name, age] = user; 
//     console.log(`nama saya adalah ${name}`)
// }

//Array object

const users = [
    { id:1, name:"Glafert" },
    { id:2, name:"Glary" },
    { id:3, name:"Gladrin " },
]

//kombinasi Rest Operator

const colors = ["merah", "Kuning"];

let [satu, ...lainya] = colors;

console.log(satu);
console.log(lainya);