# What is State in React?

In React, "state" is a built-in object that represents the mutable data that affects a component's behavior and rendering. You can use the `useState` hook to manage state in functional components. Here's an explanation with code examples using only functional components:

**State in React (Functional Components):**

1. Import the `useState` hook from the 'react' library.

2. Initialize state variables using the `useState` hook. The hook takes an initial value and returns an array with the current state value and a function to update that state.

3. Use the state variable and the update function in your component to read and modify the state.

Here's an example:

```jsx
import React, { useState } from 'react';

function StateExample() {
  // Initialize state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  // Event handler to increment the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>State in React (Functional Component)</h2>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <StateExample />
    </div>
  );
}

export default App;
```

In this functional component example, we use the `useState` hook to create a `count` state variable, initialize it with a value of 0, and provide a function (`setCount`) to update it. The `incrementCount` function increments the `count` state when the button is clicked.

This is how you can use state to manage and update data within your functional components in React.