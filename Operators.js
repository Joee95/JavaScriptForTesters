// Operators

let x = 10, y = 20;

// ********************************************
// Arithmetic Operators ( + - * / % )
console.log("Arithmetic Operators")
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(8 % 4);
console.log(5 ** 2);
console.log("Arithmetic Operators")

// ********************************************
// Post incremen
  x++;  
// pre-increment
 ++x; 
console.log(x);

// ********************************************
// Assignment Operators 
x += y; //x = x + y 
console.log(x); 

// ********************************************
// Relational / Comparison Operartors
// Always return a boolean value (True/False)
// < > <= >= !=
console.log(x>y);
console.log(x<y);
console.log(x>=y);
console.log(x != y); 

// ********************************************
// Termnary Operator
console.log(x > y ? x : y);

// ********************************************
// Logical Operatoprs
// && || !
let a = true;
let b = false;

console.log(a || b);
console.log(!a);
