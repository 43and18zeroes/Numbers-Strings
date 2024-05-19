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

console.log(Number.MAX_VALUE);       // 1.7976931348623157e+308
console.log(Number.MIN_VALUE);       // 5e-324
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN);              // NaN

console.log(Number.isNaN(NaN));       // true
console.log(Number.isFinite(10));     // true
console.log(Number.isInteger(5));     // true
console.log(Number.isSafeInteger(5)); // true


let bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);                 // 1234567890123456789012345678901234567890n
console.log(bigInt + 10n);           // 1234567890123456789012345678901234567900n
console.log(bigInt * 2n);            // 2469135780246913578024691357802469135780n

let now = new Date();
console.log(now);                    // Aktuelles Datum und Uhrzeit
console.log(now.getFullYear());      // 2024
console.log(now.getMonth());         // 4 (Mai, da Monate von 0-11 gehen)
console.log(now.getDate());          // 19
console.log(now.getDay());           // 0 (Sonntag)
console.log(now.getHours());         // 12
console.log(now.getMinutes());       // 30
console.log(now.getSeconds());       // 45

let number = 1234567.89;
let formatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
});
console.log(formatter.format(number)); // 1.234.567,89 €

let percentFormatter = new Intl.NumberFormat('en-US', {
  style: 'percent',
  maximumFractionDigits: 2,
});
console.log(percentFormatter.format(0.1234)); // 12.34%

let intArray = new Int16Array([10, 20, 30]);
console.log(intArray);               // Int16Array [10, 20, 30]

let floatArray = new Float32Array([10.5, 20.5, 30.5]);
console.log(floatArray);             // Float32Array [10.5, 20.5, 30.5]

