console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Math.pow(2, 53) - 1); // 9007199254740991

console.log(Math.pow(2, 53) - 1 + 1); // 9007199254740992
console.log(Math.pow(2, 53) - 1) + 1; // 9007199254740991

console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

console.log(0.2 + 0.4); // 0.6000000000000001
console.log(0.2 + 0.4 === 0.6); // false
console.log((5).toString(2)); // 101
console.log(1 / 5); // 0.2
console.log((1 / 5).toString(2)); // 0.001100110011001100110011001100110011001100110011001101
console.log((0.2).toString(2)); // 0.001100110011001100110011001100110011001100110011001101
console.log(1 / 3 + 1 / 3 + 1 / 3); // 1 JS rounds automatically here
console.log((0.2).toFixed(20)); // 0.20000000000000001110
console.log((0.2 + 0.4).toFixed(2)); // 0.60

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 1000); // 9007199254740992
console.log(9007199254740992000n); // 9007199254740992000n
console.log(10n - 4n); // 6n
console.log(parseInt(10n) - 4); // 6
console.log(10n - BigInt(4)); // 6n
console.log(5n / 3n); // 1n

console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Infinity); // Infinity
console.log(-Infinity); // -Infinity
console.log(1 / 0); // Infinity
console.log(Number.isFinite(10)); // true
console.log(Number.isFinite(Infinity)); // false

console.log(Math.E); // 2.718281828459045
console.log(Math.PI); // 3.141592653589793
console.log(Math.sqrt(25)); // 5
console.log(Math.sin(25)); // -0.13235175009777303
console.log(Math.pow(5, 2)); // 25
console.log(Math.abs(-5)); // 2

console.log(Math.random()); // 0.8768514271439896
