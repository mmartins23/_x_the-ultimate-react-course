# One Data Flow 

One of the fundamental data flow patterns in React is the unidirectional flow of data, where data is passed from a parent component to its child components via props. Let's explain this pattern with code examples:

**Parent Component:**

In the parent component, you define the data and pass it to the child component as props. Here's an example:

```jsx
// ParentComponent.js

import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [message, setMessage] = useState('Hello from the parent component');

  return (
    <div>
      <ChildComponent message={message} />
    </div>
  );
}

export default ParentComponent;
```

**Child Component:**

In the child component, you receive the data (in this case, `message`) as a prop and use it for rendering. Here's an example:

```jsx
// ChildComponent.js

import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      <p>{props.message}</p>
    </div>
  );
}

export default ChildComponent;
```

In this example, the `ParentComponent` maintains a piece of state called `message` and passes it as a prop to the `ChildComponent`. The `ChildComponent` then displays the message received as a prop.

This data flow pattern ensures that when the `message` in the `ParentComponent` changes, the change is automatically reflected in the `ChildComponent`. The data flows one way, from the parent to the child, making React components predictable and easy to manage.