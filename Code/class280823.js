//Array
const students = ("john","peter", "jack", "jane");
const numbers = (1, 2, 3, 4, 5);
const john = ("John", "doe", 33, true);

console.log(students);
console.log(numbers);
console.log(john);

console.log(students(2));
students[2] ="Bob";
console.log(students);

//Length
console.log(students.length);
console.log(students[students.length -1]);

//Mengakses seluruh elemen array
for (let i = 0; 1 < students.length; i++) {
    console.log
}

//Array Method 
//toString()
console.log(students.toString );
//Join()
console.log(john.Join)
//Pop
john.pop();
console.log(john);
//Push
john.push("good morning");
console.log(john);
//Shift
john.shift();
console.log(john);
//Unshift
john.unshift("Hello");
console.log(john);
//Splice
john.splice(3,0,true);
//Slice
let john2 = john.slice(2, 4);
console.log(john2);
//Concat
let output = john.concat(numbers);
console.log(output);

//object
let john3 = {
    firstName: "John",
    lastName: "Doe",
    age: 33,
    isMarried: true,
    grade: [80,100,90],
    address:{
        city:"Manado",
        province: "Sulawesi Utara",
        postalCode: "95371",
    },
    sayGreetings: function () {
        console.log("Hello World" + this.firstName);
    },
};

//Dot notation
console.log(john3.firstName);
console.log(john3.grade[2]);
console.log(john3.address.city);
console.log(john3.sayGreetings{});

//Bracket Notation
console.log(john3["firstName"]);
console.log(john3.["grade"][2]);
console.log(john3["address"]["city"]);
console.log(jonh3["sayGreetings"]{});

john3.job = "Teacher";
console.log(john3);

//Array Object
let students = [
    {
        id: 1,
        name: "john",
    },
    {
        id: 2,
        name: "Jack",
    },
    {
        id: 3,
        name: "peter",
    }
];

//forEach()
students.forEach(function(item){
    console.log{item.name} ;
})

//map()
let ouput = students.map(function(item) {
    return item.name
});
console.log(output);

//Filter()
let output1= students.filter(function (item) {
    return item.name === "john";
});
console.log(output1);

//find()
let output2 = students.find(function(item) {
    return item.name === "john";
});
console.log(output2);