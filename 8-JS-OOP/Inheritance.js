//Inheritance
class Animal {
    constructor(name){
        this.name= name;
    }

    eat(){
        console.log(`${this.name} is eating`);// has variables in it, use ``; it is the same function as this.name + "is eating", but more professional
    }
}

class Dog extends Animal{
    bark(){
        console.log("Woof woo!");
    }
}
class Goat extends Animal{
    bark(){
        console.log("Meh!");
    }
}

const myGoat = new Goat("Goaty");
myGoat.eat();

const myDog = new Dog("Buddy");//dog name is Buddy
myDog.bark();
myDog.eat();