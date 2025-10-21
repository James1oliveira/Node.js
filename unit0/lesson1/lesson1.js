"use strict";  
// Enables strict mode — helps catch common coding mistakes 
// (like using undeclared variables).

3 + 3;  
// Adds 3 plus 3 (but doesn’t display the result anywhere).

3 / 0;  
// Divides 3 by 0 (in JavaScript this gives Infinity).

console.log("Hello Universe!");  
// Prints "Hello Universe!" to the console.

let name = "James Oliveira";  
// Declares a variable named 'name' and assigns it the string value "James Oliveira".

console.log(name);  
// Prints the value of the 'name' variable to the console.

class Goat {
  // Defines a class named 'Goat' (a blueprint for creating goat objects).
  
  eat(foodType) {
    // Defines a method called 'eat' that takes a parameter 'foodType'.
    console.log(`I love eating ${foodType}`);
    // Prints a message that includes the 'foodType' value.
  }
}

let billy = new Goat();
// Creates a new instance (object) of the 'Goat' class named 'billy'.

billy.eat("tin cans");
// Calls the 'eat' method on 'billy', printing "I love eating tin cans".
