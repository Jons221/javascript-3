const calctax = function(totalprice, name) {
    totaltax = totalprice * 1;

    detailtax = `name: ${name}, tax: ${totaltax}`;
    return detailtax;
};

const pajakBaju = calctax(10000,"baju");
console.log(pajakBaju);

const pajakMieAyam = calctax(5000, "mie ayam =");
console.log(pajakMieAyam);

const pajakIndomie = calctax(2500, "indomie");
console.log(pajakIndomie);

let names = ["Budi","Joni", "Tono", "Jaka" ];

const modifiedname= names.map(name => `Mr. ${name}`);
const addmr = name => `mr. ${name}`;
let newModifiedname = names.map(addmr);
console.log(newModifiedname);

let greeting = "say hi";
// let times 4;
// if (times>3){
//     let hello = "say Hello insteda";
//     console.log(hello);
// }
// console.log(hello);