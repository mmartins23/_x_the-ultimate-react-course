# Optional Chaining

Optional Chaining is a feature in JavaScript that allows you to access properties or call methods of an object without having to explicitly check if each intermediate property exists. It prevents "TypeError: Cannot read property 'x' of undefined" errors when dealing with nested objects or when you're unsure if a property exists. Here's an explanation and some code examples of Optional Chaining:

**Optional Chaining (?.):**
- Optional Chaining is denoted by the `?.` operator and can be used to access properties or call methods on an object.
- It's particularly useful when dealing with nested objects or uncertain data structures.
- If a property or method doesn't exist at any level, the result is `undefined` rather than throwing an error.

**Example 1: Accessing Nested Properties:**
```javascript
const user = {
  name: "John",
  address: {
    city: "New York",
    zipCode: 12345
  }
};

// Without Optional Chaining
const city = user.address && user.address.city; // Verbose code
console.log(city); // Output: "New York"

// With Optional Chaining
const cityOptional = user.address?.city; // Concise and safe
console.log(cityOptional); // Output: "New York"
```

**Example 2: Calling Methods:**
```javascript
const data = {
  user: {
    getName: () => "Alice"
  }
};

// Without Optional Chaining
const userName = data.user && data.user.getName && data.user.getName(); // Verbose code
console.log(userName); // Output: "Alice"

// With Optional Chaining
const userNameOptional = data.user?.getName?.(); // Concise and safe
console.log(userNameOptional); // Output: "Alice"
```

**Example 3: Arrays and Elements:**
```javascript
const numbers = [1, 2, 3];

// Without Optional Chaining
const thirdNumber = numbers[2] || "Not found"; // Verbose code
console.log(thirdNumber); // Output: 3

// With Optional Chaining
const thirdNumberOptional = numbers?.[2] ?? "Not found"; // Concise and safe
console.log(thirdNumberOptional); // Output: 3
```

Optional Chaining simplifies code and makes it more robust, especially in scenarios where you need to access properties or methods deep within an object without the risk of encountering errors.