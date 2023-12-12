//Arrow Function

const greet =() => {
    console.log("Merry Christmas!");
}

greet();

//Enhanced object literals
const person = {
    name: "Molly",
    age: 21,
    greeting()  {
        console.log(`My name is ${this.name}.`);
    }
}

person.greeting();
//Spread and rest operators
//Spread
function sum(x,y,z){
    return x+y+z;
}

const numbers =[1,2,3];
console.log(sum(...numbers));

//Rest
function myFunction(firstArg, ...restOfArgs){
    console.log(firstArg);
    console.log(restOfArgs);
}

myFunction('one','two','three','four')


//Common JS Built-in Methods
//Arrays
//Filter

let numbers2 = [1,2,3,4,5,6,7,8,9,10];

const even =numbers2.filter((number)=> number % 2 == 0);
console.log(even);
const odd =numbers2.filter((number)=> number % 2 == 1);
console.log(odd);

//String
//Split
const messgae = "Hello, Universe, Hi";
const words = messgae.split(",");
console.log(words);

//Includes
const sentence = "The quick brown fox jumps over the lazy dog."//A sentence that has all the alphabet letters

const containsWord = sentence.includes("fox");//boolean
console.log(containsWord);

// Length
const sentenceLength = sentence.length;
console.log(sentenceLength);

//Objects
const cat = {
    name: "Kiki",
    age: 1,
    color: ["black","Yellow"]
}

//Keys
console.log(Object.keys(cat));

//Values
console.log(Object.values(cat));

console.log(cat);

//Entries
console.log(Object.entries(cat));

//Math
// max and min
const maxNumber =  Math.max(10,5,20,30);
console.log(maxNumber);
const minNumber =  Math.max(10,5,20,30);
console.log(minNumber);

//random

const randomValue =Math.random() *10;
console.log(randomValue);

//round
console.log(Math.round(randomValue));

//floor
console.log(Math.floor(randomValue));

//ceil
console.log(Math.ceil(randomValue));

//Nested Math Methods
const randomNumber =Math.floor(Math.random()*100);
console.log("Random number between 1 and 100: ",randomNumber);

//Other methods
//Date
const currentDate = new Date();
console.log(currentDate);

const xMas= new Date(2023,11,25);//maybe index, it shows Dec with 11, while Jan with 12
console.log(xMas);

//toFixed
const price = 100.12345.toFixed(2);//2 after decimal. it does round automatically. for prices and exchange rate
console.log(price);

//toString
const num = 38;
const parsedString =num.toString();
console.log(parsedString+1);
