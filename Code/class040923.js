//String Literal
//------------

let fullName = "John Doe";
let age = 20;
let address = "Manado";

let kalimat5 = "Halo nama saya " + fullName + " , Umur saya " + age + " tahun dan saya tinggal di " + address;

console.log(kalimat5);

let kalimat6 = `Halo nama saya ${fullName}, umur saya ${age}, dan saya tinggal di ${address}`;
console.log(kalimat6);

//Arrow Function
//--------------

function sayGreetings(nama){
    return `Hello ${nama}`;
}

console.log(sayGreetings("John") );

const sayGreetings6 =(nama) => {
    return `Hello ${nama}`;
};

console.log(sayGreetings6());

//Pada IIFE
(() => {
    console.log("Hello");
})();

let output1 = (() => `hello`)();
console.log(output1);

// Pada Callback
let numbers = [1, 2, 3, 4, 5];
let output2 = numbers.map(item()=> item);
console.log(output2);

//Default Parameter
//-----------------

const sayGreetings5 = (fullName) => {
    if (fullName === undefined) {
        fullName = "John Doe";
    }
    if (age === undefined) {
        age = 30;
    }
    console.log(`Hello ${fullName}`);
};

sayGreetings5();

const sayGreeting6 = (fullName = "John Doe", age = 30) => {
    console.log(`Hello ${fullName}`);
};

sayGreeting6();