# Passing and Receiving Props

In React, props (short for "properties") are a way to pass data from a parent component to a child component. They allow you to make your components dynamic and reusable by configuring their behavior and appearance. Here's an explanation of passing and receiving props in React with code examples:

**Passing Props (From Parent to Child):**

In the parent component, you pass props by including them as attributes when rendering child components. Child components can access and use these props.

```jsx
// ParentComponent.js

import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const name = 'John';
  const age = 30;

  return (
    <div>
      <ChildComponent name={name} age={age} />
    </div>
  );
}

export default ParentComponent;
```

**Receiving Props (In Child Component):**

In the child component, you can access and use the props that are passed from the parent component. Props are available as a JavaScript object.

```jsx
// ChildComponent.js

import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default ChildComponent;
```

In this example, `name` and `age` are passed from the `ParentComponent` to the `ChildComponent` as props. The child component can then render the received data.

**Using Props for Reusability:**

Props make components reusable. You can pass different data to the same child component, and it will adapt its rendering based on the props.

```jsx
// ParentComponent.js

function ParentComponent() {
  const user1 = { name: 'Alice', age: 25 };
  const user2 = { name: 'Bob', age: 28 };

  return (
    <div>
      <ChildComponent user={user1} />
      <ChildComponent user={user2} />
    </div>
  );
}
```

```jsx
// ChildComponent.js

function ChildComponent(props) {
  return (
    <div>
      <p>Name: {props.user.name}</p>
      <p>Age: {props.user.age}</p>
    </div>
  );
}
```

In this updated example, the `ChildComponent` receives a `user` prop, which is an object containing a name and age. This allows the same child component to display user information for different users.

By passing and receiving props, you can create flexible and reusable components in React, making your code more modular and maintainable.