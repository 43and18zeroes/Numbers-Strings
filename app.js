console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Math.pow(2, 53)-1); // 9007199254740991

console.log(Math.pow(2, 53)-1+1); // 9007199254740992
console.log(Math.pow(2, 53)-1)+1; // 9007199254740991

console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

const numbers = [1, 2, 3, 4, 5];

// Die forEach Methode wird auf das Array numbers angewendet
numbers.forEach(function(number) {
  console.log(number);
});