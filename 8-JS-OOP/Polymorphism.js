//Polymorphism
class Animal{
    makeSound(){
        return "The animal makes a noise";//use "" for string
    };
}

class Dog extends Animal {
    makeSound(){
        return super.makeSound() + ",the dog barks.";
    }
}

const dog= new Dog();
console.log(dog.makeSound());

class Cat extends Animal {
    makeSound(){
        return super.makeSound() + ",the cat meows.";
    }
}
const cat= new Cat();
console.log(cat.makeSound());