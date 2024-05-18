class Wolf {
  constructor(name) {
    this.name = name;
  }
  howl() {
    console.log(this.name + ": awoooooooo");
  }
}

class Dog extends Wolf {
  //The constructor method in each class is the equivalent to the function body of a Constructor Function.
  constructor(name) {
    super(name + " the dog");
  }
  woof() {
    console.log(this.name + ": woof");
  }
}

const rufus = new Dog("Rufus");

rufus.woof(); // prints "Rufus the dog: woof"
rufus.howl(); // prints "Rufus the dog: awoooooooo"

console.log(Object.getPrototypeOf(rufus) === Dog.prototype); //true
console.log(Object.getPrototypeOf(Dog.prototype) === Wolf.prototype); //true
console.log(rufus instanceof Dog);
console.log(rufus instanceof Wolf);
console.log(rufus instanceof Object);
