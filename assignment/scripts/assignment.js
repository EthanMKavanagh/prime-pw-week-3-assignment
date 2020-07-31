// REQUIRED FEATURES

// 1. Create a variable with a value of an array with the following (number) values: 3, 6, 7, 10
let myNumber = [ 3, 6, 7, 10 ];
console.log ( myNumber );
// 2. Create a variable called 'myValue' with a value of the number 0
let myValue = 0;
console.log ( myValue );

// 3. Console log the value of the array at index 2
console.log ( myNumber[ 2 ] );

// 4. Remove the last item in the array, then console log the array
myNumber.pop()
console.log ( myNumber );

// 5. Add the value of number 15 to the end of the array
myNumber.push ( 15 );
console.log ( myNumber );

// 6. Write a `for` loop that console logs each value in the array
for ( let i = 0; i < myNumber.length; i++ ) {
  console.log ( 'for loop, i:', myNumber[ i ] );
}

// STRETCH GOALS

// 7. Write a `while` loop that will increase the value of 'myValue' by 1 until its value is 10

// 8. Change the second value in the array from 6 to 20, then console log the array

// 9. Below, rewrite the `for` loop from question 6 to a `for of` loop

// 10. Reassign the value of `myValue` to 3. Then, write a `for` loop that console logs each value in the array,
// and if the value of the array at `i` matches the value of 'myValue', also console log 'Hurray!'
