//REst & Speard Operator

//Rest Parameter

const penjumlahanArray = (a, b, c) => {
    const array = [a, b, c];
    let total = 0
    array.forEach(item => {
        total += item;
    });
    console.log(total);
};
penjumlahanArray(1, 2, 3);

//Dengan Rest Parameter
const penjumlahanArray2 = (...params) => {
    let total = 0
    params.forEach(item => {
        total += item;
    });
    console.log(total);
};
penjumlahanArray2(1, 2, 3, 4, 5);

// Speard Operator
let array1 = [1, 2, 3, 4, 5];

console.log(...array1);

//1. DUplikasi array
let array2 = [array1];
array1.push(6);
console.log(`Array 1 = ${array1}`);
console.log(`Array 2 = ${array2}`);

//2. Menggunakan Array
let array1 - [1, 2, 3];
let array2 = [5, 6, 7];
let array3 = [8, 9, 10];

let combineArray5 = array1.concat(4, array2, array3);
console.log(combineArray5);

let combineArray6 = [...array1, ...array2, ...array3];

//Duplikasi Objek
let student = {...john};
john = {...john, job: "Teacher"};
console.log(john);

//Menggabungkan Objek
let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, }

//Destructuring