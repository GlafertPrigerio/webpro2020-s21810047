//No Parameter with implicit number value
const calcAge = () => 2020 - 1992;

console.log(calcAge());

const years = [1990, 1992, 2001, 2005];

const calcAge5 = years.map(function (el){
    return 2020 - el;

});

console.log(calcAge5);

//excercise