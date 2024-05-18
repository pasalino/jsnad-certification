// -------- Functional approach
const wolf = {
  howl: function () {
    console.log(this.name + ": awoooooooo");
  },
};

const dog = Object.create(wolf, {
  woof: {
    value: function () {
      console.log(this.name + ": woof");
    },
  },
});

const rufus = Object.create(dog, {
  name: { value: "Rufus the dog" },
});

rufus.woof(); // prints "Rufus the dog: woof"
rufus.howl(); // prints "Rufus the dog: awoooooooo"

console.log("Rufus descriptions", Object.getOwnPropertyDescriptors(rufus));
console.log("Rufus properties names", Object.getOwnPropertyNames(rufus));
console.log("Wolf prototype", Object.getPrototypeOf(wolf));
console.log("Dog prototype", Object.getPrototypeOf(dog));
console.log("Rufus prototype", Object.getPrototypeOf(rufus));

console.log("Rufus is a dog", Object.getPrototypeOf(rufus) === dog); //true
console.log("Dog is a wolf", Object.getPrototypeOf(dog) === wolf); //true
console.log("Rufus is a wolf", Object.getPrototypeOf(rufus) === wolf); //false

// ------- Constructor function
function WolfConstructor(name) {
  this.name = name;
}

WolfConstructor.prototype.howl = function () {
  console.log(this.name + ": awoooooooo");
};

function DogConstructor(name) {
  WolfConstructor.call(this, name + " the dog");
}

function inherit(proto) {
  function ChainLink() {}
  ChainLink.prototype = proto;
  return new ChainLink();
}

DogConstructor.prototype = inherit(WolfConstructor.prototype);

DogConstructor.prototype.woof = function () {
  console.log(this.name + ": woof");
};

const rufus2 = new DogConstructor("Rufus");

rufus2.woof(); // prints "Rufus the dog: woof"
rufus2.howl(); // prints "Rufus the dog: awoooooooo"

console.log(Object.getPrototypeOf(rufus) === DogConstructor.prototype); //true
console.log(
  Object.getPrototypeOf(DogConstructor.prototype) === WolfConstructor.prototype
); //true
console.log(Object.getPrototypeOf(rufus) === WolfConstructor.prototype); //false

// Node approach
const util = require("util");

function WolfNode(name) {
  this.name = name;
  this.group = function () {
    console.log(this.name + "hungry");
  };
}

WolfNode.prototype.howl = function () {
  console.log(this.name + ": awoooooooo");
};

function DogNode(name) {
  WolfNode.call(this, name + " the dog");

  this.breed = function () {
    console.log(this.name + " is wolf");
  };
}

DogNode.prototype.woof = function () {
  console.log(this.name + ": woof");
};

util.inherits(DogNode, WolfNode);
//this means: Object.setPrototypeOf(Dog.prototype, Wolf.prototype)

const rufus3 = new DogNode("rufusNode");
rufus3.woof();
rufus3.howl();
rufus3.group();
rufus3.breed();

// ---------------
const personPrototype = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  },
};

function Person(name) {
  this.name = name;
}

Object.assign(Person.prototype, personPrototype);
// or
// Person.prototype.greet = personPrototype.greet;
const irma = new Person("Irma");

console.log(Object.hasOwn(irma, "name")); // true
console.log(Object.hasOwn(irma, "greet")); // false
console.log(irma.hasOwnProperty("name"));
console.log(irma.hasOwnProperty("greet"));
