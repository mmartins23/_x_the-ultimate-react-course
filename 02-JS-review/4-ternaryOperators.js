// 1. Create a program that checks if a given number is even or odd. Use a ternary operator to display "Even" or "Odd" based on the condition.

function checkNumber(number) {
    console.log(number % 2 === 0 ? 'Even' : 'Odd');
}

checkNumber(3);
checkNumber(8);


// 2. Create a program that checks whether a user is logged in or not. Use a ternary operator to display a message based on the login status.

const isLoggedIn = true;

const message = isLoggedIn ? 'User is logged in' : 'User is not logged in';

console.log(message);


// 3. Write a program that categorizes a person's age into one of three groups: "Child," "Teen," or "Adult." Use a ternary operator to determine the group and display it.

const age = 25;

const ageGroup = age <=12 ? 'Child' : age <= 19 ? 'Teen' : 'Adult';

console.log(`Person's age: ${age}`);
console.log(`Age group: ${ageGroup}`);