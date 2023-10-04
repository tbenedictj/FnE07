//Buatlah fungsi yang menerima 1 parameter angka
//dan mengembalikan string apakah angka yang dimasukan adalah bilangan gajil atau genap
// menggunakan bentuk IIFE dan callback function

//IIFE Function
let syn = 9;
(function(){
    let wjp = syn % 2 === 0 ? "Hasil adalah genap" : "Hasil adalah ganjil";
    console.log(wjp)
})();

//Callback Function
function awb (input, callback){
    let sad = input % 2 == 0 ? "Hasil adalah genap" : "Hasil adalah ganjil";
    callback(sad);
}

function logawb(sad) {
    console.log(sad);
}

awb(9, logawb);