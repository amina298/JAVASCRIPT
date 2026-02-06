// Generator function
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

// Create generator object
const gen = numberGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }






// Mixin object
const canEat = {
  eat() {
    console.log(`${this.name} is eating`);
  }
};

const canWalk = {
  walk() {
    console.log(`${this.name} is walking`);
  }
};

// Base class
class Person {
  constructor(name) {
    this.name = name;
  }
}

// Add mixins
Object.assign(Person.prototype, canEat, canWalk);

const person1 = new Person("Amina");
person1.eat();  // Output: "Amina is eating"
person1.walk(); // Output: "Amina is walking"
