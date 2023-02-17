function sumNumbers(...number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += number[i];
  }
  return sum;
}

function sayHelloForName(name) {
  console.log(`Hello ${name}`);
}
