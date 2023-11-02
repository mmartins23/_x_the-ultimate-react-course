# Ternary Operators

Ternary operators, also known as conditional operators, provide a concise way to make decisions in JavaScript. They are often used as a more compact alternative to if/else statements. Here's an explanation of ternaries and their advantages:

**Ternary Operator Syntax:**
```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

**Explanation:**
- The ternary operator begins with a condition that is evaluated.
- If the condition is true, the expression immediately after the `?` is executed.
- If the condition is false, the expression immediately after the `:` is executed.

**Advantages of Ternaries:**

1. **Conciseness:** Ternaries are more concise and can make your code easier to read, especially for simple conditions.

   Example:
   ```javascript
   // Using if/else
   if (isLogged) {
     message = 'User is logged in';
   } else {
     message = 'User is not logged in';
   }

   // Using ternary
   message = isLogged ? 'User is logged in' : 'User is not logged in';
   ```

2. **Inline Usage:** Ternaries can be used directly in expressions, making them useful for assigning values or constructing complex expressions.

   Example:
   ```javascript
   const discount = hasCoupon ? 0.2 : 0.1;
   const result = isValid ? calculateValue() : defaultValue;
   ```

3. **Maintainability:** For simple conditions, ternaries can be easier to maintain and modify compared to if/else statements, which may require more code.

4. **Readability:** Ternaries can lead to cleaner and more readable code, especially when used judiciously. They are suitable for cases where the condition and the resulting expressions are straightforward.

**Note:**
- While ternaries are useful for simple conditions, complex logic is often better suited for if/else statements or switch statements for better readability.

In summary, ternary operators offer a concise and efficient way to handle conditional logic in JavaScript, making your code more compact and readable in scenarios where if/else statements may be overkill.