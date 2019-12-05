/*Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers whih are multiples of both three and five print "FizzBuzz".*/

let output = [];
let count = 1;

function fizzBuzz() {
  if (count % 3 ===0 && count % 5 === 0) {
    output.push('FizzBuzz');
  }else if (count % 3 === 0) {
    output.push('Fizz');
  }else if (count % 5 === 0) {
    output.push('Buzz');
  }else {
    output.push(count)
  }
  count++;
  console.log(output);
}
