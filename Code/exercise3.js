let people = ["Greg", "Mary", "Devon", "James"];

console.log("Nomor 1");
for (let a = 0 ; a < people.length; a++) {
    console.log(people[a]);
};
console.log("----------------");

console.log("Nomor 2")
people.forEach(function (data) {
    console.log(data)
});
console.log("----------------");

console.log("Nomor 3");
people.shift();
people.forEach(function (data){
    console.log(data)
});
console.log("----------------");

console.log("Nomor 4");
people.pop();
people.forEach(function (data) {
    console.log(data)
});
console.log("----------------");

console.log("Nomor 5");
people.unshift("Matt");
people.forEach(function (data) {
    console.log(data)
});
console.log("----------------");

console.log("Nomor 6");
people.push("Benedict");
people.forEach(function (data) {
    console.log(data)
});
console.log("---------------");

console.log("Nomor 7");
for (let b = 0; b < people.length; b++) {
    console.log(people[b]);
    if (people[b] === "Mary") {
        break;
    }
};
console.log("----------------");

console.log("Nomor 8");
let people2 = people.slice(2, 4);
people2.forEach(function (data) {
    console.log(data)
});
console.log("----------------");

console.log("Nomor 9");
people.splice(2, 1, "Elizabeth", "artice");
people.forEach(function (data) {
    console.log(data)
});
console.log("----------------");

console.log("Nomor 10");
let withBob = people.concat("Bob");
withBob.forEach(function (data) {
    console.log(data)
});
console.log("-----------------");

console.log("Final Result");
console.log("Array People")
people.forEach(function (data) {
    console.log(data);
});
console.log("-----------------");
console.log("Array withBob");
withBob.forEach(function (data) {
    console.log(data)
});
console.log("-----------------");