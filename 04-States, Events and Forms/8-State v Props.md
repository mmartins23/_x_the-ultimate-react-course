# State vs. Props

In React, both state and props are used to manage and share data within a component and its child components, but they serve different purposes.

**State:**
1. **Local to the Component:** State is internal to a component. Each component can have its own state, which is not directly accessible by other components.
2. **Mutable:** State is mutable, and you can change its value using the `setState` method.
3. **Used for Dynamic Data:** State is typically used for data that can change over time, such as user input, form values, or data fetched from an API.
4. **Defined in the Constructor or with the `useState` Hook:** You can define state variables in a component's constructor (for class components) or using the `useState` hook (for functional components).

```jsx
class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  // ...
}
```

```jsx
function FunctionalComponent() {
  const [count, setCount] = useState(0);
  // ...
}
```

**Props:**
1. **Received from Parent:** Props are passed to a component from its parent component. They are read-only within the component that receives them.
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

In summary, state is used for managing and modifying data within a component, while props are used to pass data from parent components to child components to make them more reusable and versatile. Understanding when to use state and when to use props is essential for effective React component design and data management.