# Javascript Logic in Components

In functional components, JavaScript logic is essential for creating dynamic and interactive React applications. Here's an explanation of JavaScript logic in functional React components:

1. **State Management with Hooks:**
   Functional components can manage state using hooks like `useState`. You can define and update state variables to control the behavior of your components.

   ```jsx
   import React, { useState } from 'react';

   function Counter() {
     const [count, setCount] = useState(0);

     const increment = () => {
       setCount(count + 1);
     };

     return (
       <div>
         <p>Count: {count}</p>
         <button onClick={increment}>Increment</button>
       </div>
     );
   }
   ```

2. **Event Handling:**
   JavaScript logic allows you to define event handlers in functional components. You can respond to user interactions, such as button clicks or form submissions.

   ```jsx
   import React, { useState } from 'react';

   function ToggleContent() {
     const [showContent, setShowContent] = useState(false);

     const toggle = () => {
       setShowContent(!showContent);
     };

     return (
       <div>
         <button onClick={toggle}>Toggle Content</button>
         {showContent && <p>This content is visible.</p>}
       </div>
     );
   }
   ```

3. **Conditional Rendering:**
   JavaScript logic is used for conditional rendering. You can use conditional statements and expressions to decide what content to render.

   ```jsx
   import React, { useState } from 'react';

   function ConditionalRendering() {
     const [isLoggedIn, setIsLoggedIn] = useState(false);

     return (
       <div>
         {isLoggedIn ? (
           <p>Welcome, User!</p>
         ) : (
           <p>Please log in to view the content.</p>
         )}
       </div>
     );
   }
   ```

4. **Effect Handling with `useEffect`:**
   The `useEffect` hook allows you to manage side effects, such as data fetching and subscribing to services. You can perform cleanup operations when the component unmounts.

   ```jsx
   import React, { useState, useEffect } from 'react';

   function DataFetching() {
     const [data, setData] = useState(null);

     useEffect(() => {
       fetch('https://api.example.com/data')
         .then((response) => response.json())
         .then((data) => setData(data));
     }, []);

     return (
       <div>
         {data ? <p>Data: {data}</p> : <p>Loading data...</p>}
       </div>
     );
   }
   ```

JavaScript logic in functional components is essential for creating interactive and responsive user interfaces, managing state, handling events, and controlling the component's behavior based on dynamic data and user interactions. It plays a central role in building modern web applications with React.