# Handling Events the React Way

In React functional components, you can handle events by defining event handler functions within your component and attaching them to elements in your JSX. Here's an explanation with code examples, without using arrow functions:

**Handling Events the React Way in Functional Components (No Arrow Functions):**

1. Define event handler functions as regular functions within your functional component.

2. Attach these event handler functions to elements in your JSX using event attributes like `onClick`, `onChange`, etc.

Here's a code example of handling a click event in a React functional component without arrow functions:

```jsx
import React, { useState } from 'react';

function EventHandlingFunctional() {
  const [clicked, setClicked] = useState(false);

  // Event handler function
  function handleClick() {
    setClicked(true);
  }

  return (
    <div>
      <h2>Handling Events in React (Functional Component)</h2>
      <button onClick={handleClick}>Click Me</button>
      <p>{clicked ? 'Button Clicked!' : 'Button Not Clicked'}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <EventHandlingFunctional />
    </div>
  );
}

export default App;
```

In this functional component example, the `handleClick` function is defined as a regular function to handle the button's click event. When the button is clicked, it calls `handleClick`, which sets the `clicked` state to `true`.

This approach allows you to handle events in functional components without using arrow functions, making your code more concise and readable. It's a common way to handle events in React components.