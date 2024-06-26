// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// console.log(Math.pow(2, 53) - 1); // 9007199254740991

// console.log(Math.pow(2, 53) - 1 + 1); // 9007199254740992
// console.log(Math.pow(2, 53) - 1) + 1; // 9007199254740991

// console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

// console.log(0.2 + 0.4); // 0.6000000000000001
// console.log(0.2 + 0.4 === 0.6); // false
// console.log((5).toString(2)); // 101
// console.log(1 / 5); // 0.2
// console.log((1 / 5).toString(2)); // 0.001100110011001100110011001100110011001100110011001101
// console.log((0.2).toString(2)); // 0.001100110011001100110011001100110011001100110011001101
// console.log(1 / 3 + 1 / 3 + 1 / 3); // 1 JS rounds automatically here
// console.log((0.2).toFixed(20)); // 0.20000000000000001110
// console.log((0.2 + 0.4).toFixed(2)); // 0.60

// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// console.log(Number.MAX_SAFE_INTEGER + 1000); // 9007199254740992
// console.log(9007199254740992000n); // 9007199254740992000n
// console.log(10n - 4n); // 6n
// console.log(parseInt(10n) - 4); // 6
// console.log(10n - BigInt(4)); // 6n
// console.log(5n / 3n); // 1n

// console.log(Number.POSITIVE_INFINITY); // Infinity
// console.log(Infinity); // Infinity
// console.log(-Infinity); // -Infinity
// console.log(1 / 0); // Infinity
// console.log(Number.isFinite(10)); // true
// console.log(Number.isFinite(Infinity)); // false

// console.log(Math.E); // 2.718281828459045
// console.log(Math.PI); // 3.141592653589793
// console.log(Math.sqrt(25)); // 5
// console.log(Math.sin(25)); // -0.13235175009777303
// console.log(Math.pow(5, 2)); // 25
// console.log(Math.abs(-5)); // 2

// console.log(Math.random()); // 0.8768514271439896

// function randomIntBetween(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// for (let index = 0; index < 20; index++) {
//     console.log(randomIntBetween(1, 10));
// }

// const randomIntBetween2 = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// Array.from({ length: 20 }).forEach(() => console.log(randomIntBetween2(1, 10)));

// console.log(Array.from({ length: 5 })); // [undefined, undefined, undefined, undefined, undefined]

// console.log(`${1}`); // 1
// console.log(''.length); // 0
// console.log('hello'.toLocaleUpperCase()); // HELLO
// console.log('HELLO'.toLowerCase()); // hello
// console.log('hello'.startsWith('he')); // true

// function productDescription(strings, productName, productPrice) {
//   console.log('strings', strings);
//   console.log('productName', productName);
//   console.log('productPrice', productPrice);

//   let priceCategory = 'cheap cheap regarding its price';
// //   if (productPrice > 20) {
// //     priceCategory = 'fairly priced';
// //   }
//   productPrice > 20 ? priceCategory = 'fairly priced' : priceCategory;
// //   return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`;
// return {name: productName, price: productPrice};
// }

// const prodName = 'JavaScript Course';
// const productPrice = 29.99;

// const productOutput = productDescription`This product (${prodName}) is ${productPrice}.`;
// console.log('productOutput', productOutput);

// const regex = /^\S+@\S+\.\S+$/;
// console.log(regex.test('myemail')); // false
// console.log(regex.test('test@test.de')); // true

// const regex2 = /hello/;
// console.log(regex2.test('hello')); // true
// console.log(regex2.test('hi there, hello')); // true
// console.log(regex2.test('hi there, hello ...')); // true
// console.log(regex2.test('Hello')); // false

// const regex3 = /(h|H)ello/;
// console.log(regex3.test('hello')); // true
// console.log(regex3.test('Hello')); // true
// console.log(regex3.test('hi - hello')); // true
// console.log(regex3.test('hi - hello ...')); // true
// console.log(regex3.test('hi - Hello ...')); // true

const regex4 = /.ello/ // 5 character word, but starting character random (wildcard)
console.log(regex4.test('hello')); // true
console.log(regex4.test('ello')); // false
console.log(regex4.test('Jello')); // true
console.log(regex4.test('   Jello')); // true

// Escaping the dot:
// /\./

// Any word:
// /\S/

// exec shows you where in a string a pattern is matched
console.log(regex4.exec('jello'));
// 0: "jello"
// groups: undefined
// index: 0
// input: "jello"
// length: 1
console.log(regex4.exec('Hi! jello'));
// 0: "jello"
// groups: undefined
// index: 4
// input: "Hi! jello"
// length: 1

