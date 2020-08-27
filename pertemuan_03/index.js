/*
DASAR JAVASCRIPT
*/
const firstName = "John";
const LastName = "Cena";
let age = 20; 
age = 21;
const isMarried = true;

console.log("My name is "+ " " + firstName +LastName + ",I'm " +age + " years old " + isMarried);
console.log(age, firstName);




/*---------------------------------
    Function Scope
    -------------------
*/

function helloWorld(){
    var hello = "helloWorld"

    console.log(hello);
}
function Scoope(){
for (var i = 0; i <10 ; i++){
    console.log(i);
}
}
Scoope();
helloWorld();

/* Function Scope 
---------------------------------------*/
/*-------------*/
let bilangan = 10;
console.log(bilangan =="10")/*loose Equality */
console.log(bilangan ==="10")/*strik Equality */

/* Function Scope 
---------------------------------------*/



/*operator 
-------------------------*/
let Gender ="pria"
let jenisKelamin = Gender === "pria" ? " Cowo" : " Wanita";

console.log(jenisKelamin);

/*operator 
----------------------*/
