let noki = 903
let kabeshin = 9160;
let nokinode = (noki > 850) ? noki + 100 : noki + 200;
let fullLength = nokinode * 2 + kabeshin;



function roundUpTo300(number) {
  let remainder = number % 300; // get the remainder of the number divided by 300
  if (remainder == 0) { // if the remainder is zero, then the number is already divisible by 300
    return number; // return the number as it is
  } else { // otherwise, the number needs to be rounded up
    let difference = 300 - remainder; // find the difference between 300 and the remainder
    return number + difference; // add the difference to the number and return it
  }
}


function find300(number) {
  let result = 0;
  while (number > 0) {
    number -= 300;
    result++;
  }
  if (number > 0) {
    result++;
  }
  return result;
}


function find1800(number) {
  let returning = {};
  let result = 0;
  while (number - 6 >= 0) {
    number -= 6;
    result++;
    returning['1800'] = result;
  }
  result = 0;
  while (number - 5 >= 0) {
    number -= 5;
    result++;
    returning['1500'] = result;
  }
  result = 0;
  while (number - 4 >= 0) {
    number -= 4;
    result++;
    returning['1200'] = result;
  }
  result = 0;
  while (number - 3 >= 0) {
    number -= 3;
    result++;
    returning['900'] = result;
  }
  result = 0;
  while (number - 2 >= 0) {
    number -= 2;
    result++;
    returning['600'] = result;
  }
  return returning;
}


let startPoint = (roundUpTo300(fullLength)-kabeshin)/2;


let nokisakibanare = startPoint - nokinode
let kabebanere = startPoint - 600 - 60
console.log(
  roundUpTo300(fullLength),
  startPoint,
  nokisakibanare,
  kabebanere
);