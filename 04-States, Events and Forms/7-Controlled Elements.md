# Controlled Elements

Controlled elements in React refer to form elements (like input, textarea, and select) whose values are controlled by the component's state. You control their values through React state, and React handles the rendering of the form elements and their values. Here's an explanation with code examples using functional components:

**1. Initializing State:**

You can initialize state to control the value of a form element. In this example, we'll create a controlled input element:

```jsx
import React, { useState } from 'react';

function ControlledInput() {
  const [inputValue, setInputValue] = useState('');

  // ...
}
```

**2. Connecting State to the Input:**

To make the input controlled, connect its `value` attribute to the state variable and update it using the `onChange` event handler:

```jsx
function ControlledInput() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue} // Connect input value to state
        onChange={handleInputChange} // Update state on input change
      />
      <p>Value: {inputValue}</p> {/* Display controlled value */}
    </div>
  );
}
```

In this example, the input's `value` attribute is controlled by the `inputValue` state variable. The `onChange` event handler updates the state when the input changes.

**3. React's Handling:**

By controlling the input's value using state, React ensures that the input's value is always synchronized with the component's state.

**4. Form Submission:**

With controlled elements, you can easily handle form submission:

```jsx
function ControlledInput() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Access the controlled input value (inputValue) for submission
    console.log('Submitted value:', inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

In this example, the form can be submitted, and the controlled input value is easily accessible for processing.

Controlled elements provide a convenient way to manage and manipulate form inputs in React applications.