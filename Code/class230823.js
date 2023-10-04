//JavaScript Function

function greetings(){
    const jeki = 20;//Local
    if (jeki === 20) {
        const address = "manado"; //Stock
    }
    return "hello";
}

const will = 19; //Global
console.log(greetings());

//different method
const greetingggsss = function () {
    return "bello";
}

console.log(greetingggsss());

//IIFE (Immediately Invoked function Expression)
//Anonymous Function
(function(){
    console.log("asede");
})();

//Callback Function
function createGreetings(name, callback){
    const greetink = "Hello " + name;
    callback(greetink);
}

function loggreetink(greetink) {
    console.log(greetink);
}

createGreetings("John", loggreetink);