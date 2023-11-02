// 1. Write an arrow function that calculates the area of a rectangle. The function should take two parameters, length and width, and return the area.

const calculateRectangleArea = (length, width) => length * width;

const length = 5;
const width = 8;
const area = calculateRectangleArea(length, width);

console.log(`The area of the rectangle with length ${length} and width ${width} is ${area}.`);


// 2. Given an array of numbers, use an arrow function to filter and return only the even numbers from the array.

const numbers = [1,2,3,4,5,6,7,8,9];

const evenNumbers =  numbers.filter(number => number % 2 === 0);

console.log("Even numbers:", evenNumbers);
