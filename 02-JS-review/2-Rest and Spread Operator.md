# Rest Spread Operator

The Rest and Spread operators are powerful features in JavaScript that allow you to work with variable numbers of arguments, elements, or properties in a flexible and concise way. Here's an explanation of each:

**Spread Operator (`...`)**:

- The Spread operator, denoted by `...`, allows you to spread elements of an iterable (e.g., an array) into another iterable or object.
- It is often used to create copies of arrays or objects, merge arrays, and pass function arguments dynamically.
- Example 1: Copying an array:
  ```javascript
  const originalArray = [1, 2, 3];
  const copyArray = [...originalArray];
  ```
- Example 2: Merging arrays:
  ```javascript
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5];
  const mergedArray = [...arr1, ...arr2];
  ```

**Rest Parameter (`...`)**:

- The Rest parameter, also denoted by `...`, allows you to represent an indefinite number of function arguments as an array.
- It is typically used in function parameter lists to handle variable-length arguments.
- Example: Calculating the sum of variable arguments:
  ```javascript
  function calculateSum(...numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
  }
  const result = calculateSum(1, 2, 3, 4, 5); // result will be 15
  ```

In summary, the Spread operator is used to expand elements or properties, while the Rest parameter is used to gather multiple values into an array. Both operators make it easier to work with dynamic and variable data in JavaScript.