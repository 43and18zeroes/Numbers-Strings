console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Math.pow(2, 53)-1); // 9007199254740991

console.log(Math.pow(2, 53)-1+1); // 9007199254740992
console.log(Math.pow(2, 53)-1)+1; // 9007199254740991

console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

// Math constants
console.log(Math.PI);         // 3.141592653589793
console.log(Math.E);          // 2.718281828459045
console.log(Math.LN2);        // 0.6931471805599453
console.log(Math.LN10);       // 2.302585092994046
console.log(Math.LOG2E);      // 1.4426950408889634
console.log(Math.LOG10E);     // 0.4342944819032518
console.log(Math.SQRT2);      // 1.4142135623730951
console.log(Math.SQRT1_2);    // 0.7071067811865476

// Math methods
console.log(Math.abs(-5));           // 5
console.log(Math.ceil(4.2));         // 5
console.log(Math.floor(4.7));        // 4
console.log(Math.round(4.5));        // 5
console.log(Math.trunc(4.9));        // 4

console.log(Math.max(1, 3, 2));      // 3
console.log(Math.min(1, 3, 2));      // 1

console.log(Math.pow(2, 3));         // 8
console.log(Math.sqrt(16));          // 4
console.log(Math.cbrt(27));          // 3

console.log(Math.random());          // Random number between 0 and 1
console.log(Math.sign(-8));          // -1

console.log(Math.sin(Math.PI / 2));  // 1
console.log(Math.cos(Math.PI));      // -1
console.log(Math.tan(Math.PI / 4));  // 1

console.log(Math.asin(1));           // 1.5707963267948966
console.log(Math.acos(1));           // 0
console.log(Math.atan(1));           // 0.7853981633974483

console.log(Math.exp(1));            // 2.718281828459045
console.log(Math.log(1));            // 0
console.log(Math.log10(100));        // 2
console.log(Math.log2(8));           // 3

console.log(Math.hypot(3, 4));       // 5
