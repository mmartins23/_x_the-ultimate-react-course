# Updating State Based on Current State

Updating state based on the current state is a common operation in React to ensure that you're working with the latest state value. You can do this by passing a function to the state update function. Here's an explanation with code examples using functional components:

**1. Initializing State:**

You can initialize state using the `useState` hook. In this example, we'll use a counter as state:

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // ...
}
```

**2. Updating State Based on Current State:**

To update the state based on its current value, you should pass a function to the `setCount` function. This function receives the current state as its argument.

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1); // Using the updater function
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1); // Using the updater function
  };

  // ...
}
```

In the `increment` and `decrement` functions, we pass a function to `setCount` that takes the previous state `prevCount` and returns the updated state based on that value.

**3. React's State Handling:**

React ensures that state updates are batched and executed in the correct order, so you don't need to worry about race conditions or conflicts.

**4. Re-rendering:**

State updates trigger re-rendering of the component. When the state changes, the UI is updated to reflect the new state values.

Here's the complete example:

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
```

In this example, the counter value is updated based on its current value, ensuring that the state changes are handled correctly.