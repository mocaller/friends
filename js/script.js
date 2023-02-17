function sumNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

function sayHelloForName(name) {
  console.log(`Hello ${name}`);
}

let arr = [12, 3, 4, 6, 7, 25, 24];

let name = "Mohammed";

console.log(sumNumbers(arr));

sayHelloForName(name);
