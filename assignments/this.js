/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Applying the 'this' keyword without setting it to an object references everything in the window (binding it to the window), not just one object.
* 2. When you apply 'this' to an object in in a function, it stays in the function .. implicitly. it doesnt apply outside the function (explicitly).
* 3. The 'new' keyword creates a new object which has new qualitites which you create that can refferenced in different places.
* 4. Say you have an object with the name 'person' and a quality inside 'name: Michael", outside of the 'person' object you can then reference the object inside of a different given function if you reference it correctly. ${this.name}
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function hello(param) {
    console.log(this);
    return `I like to say: ${param}`;
}
  
console.log(hello("hello"));

// Principle 2

// code example for Implicit Binding
const hobbit = {
    name: "Samwise",
    age: 32,
    food: "taters",
    cook: function() {
      return `${this.name} loves to cook ${this.food}`;
    }
}
  
console.log(hobbit.cook());


// Principle 3

// code example for New Binding
function Animal(food) {
    this.food = food;
    this.eat = function() {
      console.log(`This animal likes to eat ${this.food}`);
    }
}
  
const zebra = new Animal('grass');
const lion = new Animal('meat');
  
console.log(zebra);
  
zebra.eat();
lion.eat();

// Principle 4

// code example for Explicit Binding
const person = {
    name: "Jill"
}
  
const hobbit = {
    name: "Frodo"
}
  
const skills = ["HTML","CSS","JS"];
  
function introduce(skills1, skills2, skills3) {
    debugger;
    return `Hello! my name is: ${this.name} and these are my skills: ${skills1}, ${skills2}, ${skills3}`;
}
  
console.log(introduce.call(person, skills));
  
console.log(introduce.apply(person, skills));
  
const useLater = introduce.bind(person, ...skills);
  
console.log(useLater());