//Functions - Set of instructions

function greet(){
    console.log("Instruction #1");
    console.log("Instruction #2");
    console.log("Instruction #3");
    console.log("Merry Christmas!");
};

greet(); //calling the function

//Function Hoisting

//1. Funciton Declaration
functionDeclaration();

function functionDeclaration(){
    console.log("Hello World! I am a function declaration.");
}

//2. Function Expression
const functionExpression =function(){
    console.log("Hello Universe! I am a function expression.");
}
functionExpression();

//3. Functino with Parameters

function greetEveryone(name){//variable being called parameter when argument is the value ???
    console.log("Hello Everyone!",name);
}
greetEveryone('Molly');

//Functions with a return value
function sum(a,b){
    a = a+1
    return a + b;
    // console.log("Hello Regel, Gab and Ron!");//this line would not be returned
}
console.log("The sum is: ", sum(10,5));

//Anonymous Function
let greet2 = function(){
    console.log("Hello");
};

greet2();

//Higher-order function
function calculate(operation,num1,num2){
    return operation(num1,num2)
};

//Callback functions
function add(a, b){
    return a +b;
};
function substract(a, b){
    return a-b;
};

//Using higher-order functions
let total = calculate(add,10,5);
let difference = calculate(substract,23,13);

console.log("result of addition:",total);
console.log("result of substraction:",difference);