# React Fragments

React Fragments are a feature in React that allows you to group multiple JSX elements without the need for a surrounding container element. This can help keep your JSX cleaner and avoid unnecessary wrapping elements in the DOM. Here's an explanation with code examples:

**React Fragments in React:**

1. Use the `<React.Fragment>` component or its shorthand `<>` to wrap multiple elements that you want to group together.

2. Inside the fragment, you can include any JSX elements as if they were within a regular container element.

Here's a code example of using React Fragments in a React component:

```jsx
import React from 'react';

function FragmentExample() {
  return (
    <>
      <h2>Using React Fragments</h2>
      <p>This is a paragraph.</p>
      <p>Another paragraph.</p>
    </>
  );
}

function App() {
  return (
    <div>
      <h1>React App</h1>
      <FragmentExample />
    </div>
  );
}

export default App;
```

In this example, the `FragmentExample` component uses the shorthand `<>` to wrap the `<h2>` and two `<p>` elements. When rendered, it produces the same result as if you had used a single parent `<div>`, but without adding an extra container element to the DOM.

React Fragments are a useful feature to maintain clean and efficient JSX code by avoiding unnecessary nesting of elements when rendering multiple components or elements.