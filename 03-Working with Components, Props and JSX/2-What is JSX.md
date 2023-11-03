# What is JSX ?

JSX (JavaScript XML) is an extension to JavaScript used in React to define the structure and content of React components. It allows you to write HTML-like code within your JavaScript files. Here are code examples using regular functions:

**1. Basic JSX:**
```jsx
import React from 'react';

function MyComponent() {
  return (
    <div>
      <h1>Hello, JSX!</h1>
      <p>This is a paragraph in JSX.</p>
    </div>
  );
}

export default MyComponent;
```

**2. Embedding Expressions:**
```jsx
import React from 'react';

function Greeting(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Today is {new Date().toDateString()}.</p>
    </div>
  );
}

export default Greeting;
```

**3. Using JSX in Expressions:**
```jsx
import React from 'react';

function ShowMessage(props) {
  const showMessage = props.show ? <p>Message: {props.message}</p> : null;

  return (
    <div>
      {showMessage}
    </div>
  );
}

export default ShowMessage;
```

**4. JSX Attributes:**
```jsx
import React from 'react';

function Link() {
  return (
    <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
      Visit Example
    </a>
  );
}
```

In these examples, regular functions are used to define components, and JSX is utilized to structure and render the content of the components. JSX attributes like `href`, `target`, and `rel` are used as well.