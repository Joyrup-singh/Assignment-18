// Describe the usage of the comma operator in JavaScript and provide an example.

/* The comma (,) operator evaluates each of its operands (from left to right) and returns the value of the last operand. This is commonly used to provide multiple updaters to a for loop's afterthought. */

// example 

let x = 1;
x = (x++, x);
console.log(x);