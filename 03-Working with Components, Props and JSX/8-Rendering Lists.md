# Rendering Lists

Rendering lists in React is a common task, and it's often done by mapping an array of data to JSX elements. Here's an explanation with code examples on how to render lists in React:

Suppose you have an array of items, and you want to render each item as a list in your React component.

**Data Array:**

```javascript
const items = ["Item 1", "Item 2", "Item 3", "Item 4"];
```

**Rendering Lists in React:**

1. In your React component, you can use the `map` method to iterate over the array and create a list of JSX elements.

2. Each item in the array is transformed into a JSX element, and the array of JSX elements is returned within a parent element (often a `div`).

Here's a code example of rendering a list using the `map` method:

```jsx
import React from 'react';

function ListComponent() {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  // Mapping the array to JSX elements
  const itemList = items.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return (
    <div>
      <h2>Items List:</h2>
      <ul>{itemList}</ul>
    </div>
  );
}

export default ListComponent;
```

In this example, we map each item in the `items` array to a `li` element within a `ul` element. The `key` attribute is added to each `li` to help React efficiently update the list.

This results in a list of items rendered as an unordered list in your React component. You can easily apply this pattern to render dynamic lists of data in your React applications.