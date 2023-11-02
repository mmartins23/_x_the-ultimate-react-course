## Destructuring Objects and Arrays

**Destructuring** in JavaScript allows you to extract specific values from objects and arrays into variables. This feature can make your code cleaner and more concise. Here are examples of destructuring objects and arrays:

### Destructuring Objects:

#### Example 1: Object Destructuring

```javascript
const person = { firstName: 'John', lastName: 'Doe' };

// Extract values into variables
const { firstName, lastName } = person;

console.log(firstName); // Output: John
console.log(lastName);  // Output: Doe
```

#### Example 2: Default Values

```javascript
const person = { firstName: 'John' };

// Provide default values
const { firstName, lastName = 'Doe' } = person;

console.log(firstName); // Output: John
console.log(lastName);  // Output: Doe
```

#### Example 3: Renaming Variables

```javascript
const person = { name: 'John', age: 30 };

// Rename variables while destructuring
const { name: fullName, age: years } = person;

console.log(fullName); // Output: John
console.log(years);     // Output: 30
```

### Destructuring Arrays:

#### Example 1: Array Destructuring

```javascript
const colors = ['red', 'green', 'blue'];

// Extract values into variables
const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);  // Output: red
console.log(secondColor); // Output: green
console.log(thirdColor);  // Output: blue
```

#### Example 2: Skipping Values

```javascript
const colors = ['red', 'green', 'blue'];

// Skip the second value
const [firstColor, , thirdColor] = colors;

console.log(firstColor);  // Output: red
console.log(thirdColor);  // Output: blue
```

#### Example 3: Rest Operator

```javascript
const numbers = [1, 2, 3, 4, 5];

// Destructure the first value and collect the rest into an array
const [firstNumber, ...restNumbers] = numbers;

console.log(firstNumber);  // Output: 1
console.log(restNumbers);  // Output: [2, 3, 4, 5]
```

Destructuring is a powerful feature that simplifies working with complex data structures, making your code more readable and concise. You can use it in various scenarios, including function parameter destructuring and deep object or nested array destructuring.