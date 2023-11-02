// Destructuring Objects:

// 1. Extract the name property from the following object into a variable:

const person = { firstName: 'Alice', age: 28 };

const { firstName } = person;

console.log(firstName); // Alice


// 2. Create a function that takes an object with properties title, author, and year, and destructures it to print a message like "The book 'Title' was written by Author in Year."

function printBookInfo(book) {
    const { title, author, year } = book;
    console.log(`The book '${title}' was written by ${author} in ${year}.`);
}

const book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
};

printBookInfo(book);


// 3. Given an object representing a point in 2D space, extract its x and y properties into separate variables:

const point = { x: 5, y: 10 };

const { x, y } = point;

console.log(`The point is at x: ${x} and y: ${y}`);


// 4. Create an object representing a product with properties name, price, and category. Extract the name and price properties into variables.

const product = {
    name: 'Smartphone',
    price: 499.99,
    category: 'Electronics',
};

const { name, price } = product;

console.log(`Product Name: ${name}`);
console.log(`Product Price: $${price}`);


// 5. Write a function that destructures an object with user information (name, email, and age) and returns a greeting message, such as "Hello, Name! You are Age years old."

function greetUser(user) {
    const { name, age } = user;
    console.log(`Hello, ${name}! You are ${age} years old.`);
}

const user = {
    name: 'Alice',
    email: 'alice@example.com',
    age: 28,
};

greetUser(user);


// Destructuring Arrays:

// 1. Given an array of colors, extract the first and last colors into separate variables:

const colors = ['red', 'green', 'blue', 'yellow'];

const [firstColor, , , lastColor] = colors;

console.log(`First Color: ${firstColor}`); // red
console.log(`Last Color: ${lastColor}`); // yellow


// 2. Create a function that takes an array of temperatures and destructures it to calculate and return the average temperature.


function calculateAverageTemperature(temperatures) {
    const sum = temperatures.reduce((total, temperature) => total + temperature, 0);
    const average = sum / temperatures.length;
    return average
}

const temperatureData = [72, 68, 75, 80, 78];

const averageTemp = calculateAverageTemperature(temperatureData);
console.log(`The average temperature is ${averageTemp} degrees.`);


// 3. Extract the first and third elements from the following array into separate variables:

const numbers = [10, 20, 30, 40];

const [firstElement, , thirdElement] = numbers;

console.log(`First Element: ${firstElement}`);
console.log(`Third Element: ${thirdElement}`);


// 4. Given an array of car objects with properties make, model, and year, extract the make and model properties into separate arrays.

const cars = [
    { make: 'Toyota', model: 'Camry', year: 2022 },
    { make: 'Honda', model: 'Civic', year: 2021 },
    { make: 'Ford', model: 'Fusion', year: 2020 },
];

const makeArray = cars.map(car => car.make);
const modelArray = cars.map(car => car.model);

console.log('Make Array:', makeArray);
console.log('Model Array:', modelArray);


// 5. Write a function that destructures an array containing the details of a task (description, priority, and deadline) and returns a formatted task message.

function formatTask(taskDetails) {
    const [description, priority, deadline] = taskDetails;
    return `Task: ${description}\nPriority: ${priority}\nDeadline: ${deadline}`;
}

const taskDetails = ['Complete report', 'High', '2023-12-15'];

const taskMessage = formatTask(taskDetails);
console.log(taskMessage);