# Creating a State Variable With useState

In React, you can create a state variable using the `useState` hook in functional components. Here's how you do it:

1. Import the `useState` hook from the 'react' library.
2. Use the `useState` hook to declare a state variable and its initial value.
3. The `useState` hook returns an array with two elements: the current state value and a function to update that state.
4. You can use the state variable to access and display the current state value, and the function to update the state as needed.

Here's a code example of creating a state variable in a functional component:

```jsx
import React, { useState } from 'react';

function StateExample() {
  // Declare a state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  // Event handler to increment the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>State Variable With useState</h2>
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

In this example, we import the `useState` hook, create a state variable `count` with an initial value of 0, and provide a function `setCount` to update the state. When the button is clicked, the `incrementCount` function updates the `count` state, and the updated value is displayed in the component.