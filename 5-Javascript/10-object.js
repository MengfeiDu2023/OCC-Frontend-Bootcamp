const person = {
    firstName: "Mengfei",
    lastName: "Du",
    nickname: "DMF",
    age:28,
    height : "5'9",
    hobbies: ["reading","gaming","dancing"],

    //method
    greet:function(){
        console.log(`Hello, my name is ${person.firstName} and I am ${person.age}.`);
    }

}

//Dot notation
console.log(person.firstName);
console.log(person.hobbies);

person.greet();

//Adding new properties
person.nationality = "American";
console.log(person.nationality);

//Adding new methods
person.talkHobbies = function(){
    console.log(`I like ${person.hobbies[1]}.`);
}
person.talkHobbies();
//need to call it to show in console

//OOP = Object-oriented Programming

//Nested Objects
const movie ={
    title: "Pulp Fiction",
    genre: "Action",
    cast:["Samuel L. Jackson","John Travolta"]
}

person.favoriteMovie = movie;
console.log(person.favoriteMovie.title);

//Destructuring Objects
// const lastName = person.lastName;
// const nickName = person.nickName;
// const height = person.height;

const {lastName,nickname,age} = person;console.log(lastName,nickname,age);

const {height} = person;
console.log(height);