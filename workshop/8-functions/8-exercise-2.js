// Q2a
// Write a function that accepts two integers and returns
// the greater one. (this is slightly different from the previous question.)

// Also, wouldn't it be nice if there were a Math method that could simplify the code....
// https://www.w3schools.com/jsreF/jsref_obj_math.asp

function maxOne(num1, num2) {
  return Math.max(num1, num2);
}

console.log(`${maxOne(12, 43)} is the greater number`);

// Q2b
// Without changing the function at all,
// can you figure out how we could use it to determine the greater number between 4 integers?

function max2(num1, num2, num3, num4) {
  return Math.max(num1, num2, num3, num4);
}

console.log(`${max2(12, 43, 100, 200)} is the greater number`);

// Q2c
// Would this work with more integers?
