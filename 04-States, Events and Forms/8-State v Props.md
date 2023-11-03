# State vs. Props

In React, both state and props are used to manage and share data within a component and its child components, but they serve different purposes.


**State:**
1. **Local to the Component:** State is internal to a functional component, just like in class components. Each functional component can have its own state, which is not directly accessible by other components.
2. **Mutable:** State is mutable in functional components, and you can change its value using the `useState` hook and the `setState` function.
3. **Used for Dynamic Data:** State is typically used for data that can change over time within a component, such as user input, form values, or data fetched from an API.
4. **Defined with the `useState` Hook:** In functional components, you define state variables using the `useState` hook.

```jsx
import React, { useState } from 'react';

function FunctionalComponent() {
  const [count, setCount] = useState(0); // Define state
  // ...
}
```

**Props:**
1. **Received from Parent:** Props are passed to functional components from their parent component. They are read-only within the component that receives them.
2. **Immutable:** Props are immutable; you cannot change their values directly within the component.
3. **Used for Static Data:** Props are typically used for data that is passed from parent to child components and remains constant during the component's lifecycle.
4. **Defined in Parent Components:** Props are defined in the parent component and passed down to child components when rendering them.

**Example:**

```jsx
function ParentComponent() {
  const data = 'Hello from parent';
  return <ChildComponent message={data} />;
}

function ChildComponent(props) {
  // Access and display the received prop
  return <div>{props.message}</div>;
}
```

In functional components, the distinction between state and props remains the same as in class components, with the primary difference being how state is defined and managed using hooks like `useState`. Understanding when to use state and when to use props is essential for effective React component design and data management.