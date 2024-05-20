console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Math.pow(2, 53) - 1); // 9007199254740991

console.log(Math.pow(2, 53) - 1 + 1); // 9007199254740992
console.log(Math.pow(2, 53) - 1) + 1; // 9007199254740991

console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

const numbers = [1, 2, 3, 4, 5];

// Die forEach Methode wird auf das Array numbers angewendet
numbers.forEach(function (number) {
  console.log(number);
});

// Definition der Callback-Funktion
function logNumber(number) {
  console.log(number);
}

// Verwendung der Callback-Funktion
const numbers2 = [1, 2, 3, 4, 5];
numbers.forEach(logNumber);

const numbers3 = [1, 2, 3, 4, 5];

// Verwendung eines Inline-Callbacks
numbers.forEach(function (number) {
  console.log(number);
});

document.addEventListener('DOMContentLoaded', () => {
  const keyInput = document.getElementById('keyInput');
  const fields = [
    document.getElementById('field1'),
    document.getElementById('field2'),
    document.getElementById('field3'),
  ];

  keyInput.addEventListener('input', () => {
    const key = keyInput.value;

    fields.forEach((field, index) => {
      field.value = key.slice(
        index * (key.length / fields.length),
        (index + 1) * (key.length / fields.length)
      );
    });
  });

  keyInput.addEventListener('paste', event => {
    event.preventDefault();

    const pasteData = (event.clipboardData || window.clipboardData).getData(
      'text'
    );

    keyInput.value = pasteData;

    fields.forEach((field, index) => {
      field.value = pasteData.slice(
        index * (pasteData.length / fields.length),
        (index + 1) * (pasteData.length / fields.length)
      );
    });
  });
});
