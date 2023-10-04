//Buatlah fungsi yang menerima 1 input angka dan mengembalikan string apakah angka yagn dimasukan adalah bilangan ganjil dan genap
let input = 11;
function hasil(input){
    let ajax = input % 2 === 0 ? "hasil adalah genap" : "hasil adalah ganjil";
    return ajax;
}
console.log(hasil(input));
