# The Rules of JSX

JSX (JavaScript XML) is a syntax extension for JavaScript used in React to describe the structure and content of UI components. Here are the fundamental rules of JSX with code examples:

1. **Tags Must Be Closed or Self-Closing:**
   JSX tags must be properly closed, either with a closing tag or by using self-closing tags. For example:

   ```jsx
   // Correct: Using a self-closing tag
   <img src="image.jpg" alt="An image" />

   // Correct: Using a closing tag
   <div>Hello, JSX!</div>

   // Incorrect: Missing closing tag
   <input type="text" />
   ```

2. **One Root Element:**
   JSX expressions must have a single root element. You can't return multiple elements at the top level. Wrap them in a parent element when necessary.

   ```jsx
   // Correct: Single root element
   <div>
     <p>Paragraph 1</p>
     <p>Paragraph 2</p>
   </div>

   // Incorrect: Multiple root elements
   <p>Paragraph 1</p>
   <p>Paragraph 2</p>
   ```

3. **Expression Inside Curly Braces:**
   You can embed JavaScript expressions within JSX using curly braces `{}`. This allows you to insert variables and execute JavaScript code.

   ```jsx
   // Embedding a variable
   const greeting = 'Hello';
   <div>{greeting}, World!</div>

   // Executing JavaScript code
   <div>{2 + 2}</div>
   ```

4. **Attributes Use CamelCase:**
   JSX attributes use camelCase for their names, just like in JavaScript. For example, `className` instead of `class`, and `htmlFor` instead of `for`.

   ```jsx
   <div className="container">
     <label htmlFor="inputField">Input:</label>
   </div>
   ```

5. **Comments in JSX:**
   You can add comments within JSX using curly braces and double slashes, just like in JavaScript.

   ```jsx
   <div>
     {/* This is a JSX comment */}
     <p>Content</p>
   </div>
   ```

6. **No HTML Entities:**
   You can't use HTML entities like `&nbsp;` directly in JSX. Instead, use the Unicode character or the actual text.

   ```jsx
   // Correct: Using Unicode character for a non-breaking space
   <p>Text before&nbsp;and after</p>

   // Incorrect: Using HTML entity
   <p>Text before&nbsp;and after</p>
   ```

Understanding these rules will help you create well-structured JSX in your React components.