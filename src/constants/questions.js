export const questions = {
  htmlcss: {
    title: "HTML & CSS",
    categories: [
      {
        name: "HTML & CSS Coding Questions",
        type: "coding",
        questions: [
          "Create a responsive navigation bar using Flexbox or Grid.",
          "Build a multi-column layout using CSS Grid.",
          "Implement a responsive card component with hover effects.",
          "Create a sticky header that stays on top while scrolling.",
          "Build a modal popup with pure HTML and CSS.",
          "Implement a CSS-only accordion component.",
          "Create a pure CSS image slider/carousel.",
          "Build a responsive pricing table with Flexbox or Grid.",
          "Implement a tooltip that appears on hover.",
          "Create a responsive form with validation styling using CSS.",
        ],
      },
      {
        type: "mock",
        name: "HTML & CSS (Mock)",
        questions: [
          {
            q: "What are semantic tags?",
            a: "Semantic tags clearly define the meaning of content. Examples: <header>, <article>, <footer>, <section>. They improve accessibility and SEO.",
          },
          {
            q: "Difference between block and inline elements?",
            a: "Block elements take full width (e.g., <div>, <p>, <section>). Inline elements take only the space needed (e.g., <span>, <a>, <strong>).",
          },
          {
            q: "When to use Flexbox and when to use Grid?",
            a: "Use Flexbox for 1D layout (row/column). Use Grid for 2D layout (rows + columns).",
          },
          {
            q: "Explain the CSS Box Model.",
            a: "Every HTML element is a box with content → padding → border → margin.",
          },
          {
            q: "Difference between relative, absolute, and fixed position?",
            a: "Relative: based on itself. Absolute: based on ancestor. Fixed: based on viewport.",
          },
          {
            q: "What is z-index and when to use it?",
            a: "z-index controls stacking order. Higher value = on top.",
          },
          {
            q: "What are media queries in responsive design?",
            a: "Media queries let styles adapt to screen size. Example: @media (max-width: 600px) { body { font-size: 14px; } }",
          },
          {
            q: "What wins: class or ID in CSS specificity?",
            a: "ID has higher specificity than class.",
          },
          {
            q: "Which one is unique: id or class?",
            a: "id is unique. class can be reused.",
          },
          {
            q: "Difference between inline, internal, and external CSS?",
            a: "Inline CSS is written inside the style attribute of elements. Internal CSS is written inside a <style> tag in the head. External CSS is stored in a separate .css file and linked with <link> tag, making it reusable and cleaner.",
          },
          {
            q: "Difference between relative, absolute, fixed, and sticky position?",
            a: "Relative: positions element relative to itself. Absolute: positioned relative to the nearest positioned ancestor. Fixed: positioned relative to the viewport and stays fixed on scroll. Sticky: toggles between relative and fixed based on scroll position.",
          },
          {
            q: "Difference between inline-block and block?",
            a: "Block elements take full width and start on a new line (e.g., <div>, <p>). Inline-block allows setting width/height but still flows inline without breaking to a new line.",
          },
          {
            q: "Difference between link tag and @import in CSS?",
            a: "<link> is preferred for including external CSS files as it loads faster and supports parallel downloads. @import is slower, loads after HTML is parsed, and can block rendering.",
          },
          {
            q: "What are CSS pseudo-classes vs pseudo-elements?",
            a: "Pseudo-classes define a special state of an element (e.g., :hover, :nth-child). Pseudo-elements style specific parts of an element (e.g., ::before, ::after, ::first-line).",
          },
          {
            q: "Difference between SVG, Canvas, and img tags?",
            a: "SVG is scalable vector graphics, resolution independent and interactive. Canvas is bitmap-based, good for dynamic graphics but not scalable. <img> is static, displays raster or vector images but not interactive.",
          },
          {
            q: "How browsers render CSS (Critical Rendering Path)?",
            a: "Browser parses HTML into DOM and CSS into CSSOM. DOM + CSSOM combine to form the Render Tree. Then layout (calculating positions) and painting happen. Critical Rendering Path optimizes CSS loading for faster rendering.",
          },
          {
            q: "Difference between localStorage, sessionStorage, and cookies?",
            a: "localStorage stores data with no expiry (persists across sessions). sessionStorage stores data for a single session (cleared on tab close). Cookies store small amounts of data, sent with each request, often used for authentication.",
          },
          {
            q: "What is Critical CSS and why use it?",
            a: "Critical CSS is the minimum CSS required to render above-the-fold content quickly. It improves performance and reduces render-blocking, leading to faster page loads.",
          },

          {
            q: "What's the difference between :hover and ::after?",
            a: ":hover is pseudo-class. ::after is pseudo-element to add content.",
          },
          {
            q: "What’s the difference between em, rem, %, and px?",
            a: "px = fixed, em = parent-based, rem = root-based, % = parent-based (width mostly).",
          },
          {
            q: "How do you add a smooth hover effect?",
            a: "Use transition property in CSS.",
          },
          {
            q: "How does CSS inheritance work?",
            a: "Some properties inherit (color, font), others don’t (margin, padding).",
          },
          {
            q: "Why shouldn't we use too many IDs in CSS?",
            a: "IDs reduce reusability. Classes are more scalable.",
          },
          {
            q: "What is the purpose of alt attributes and ARIA roles?",
            a: "alt describes images for screen readers. ARIA roles improve accessibility.",
          },
          {
            q: "Explain CSS specificity and its order.",
            a: "Specificity determines which CSS rule applies when multiple rules target the same element. Order: Inline style > ID > Class/Pseudo-class/Attribute selectors > Element/Pseudo-element selectors. Higher specificity wins.",
          },
          {
            q: "What are CSS custom properties (variables) and how do you use them?",
            a: "Custom properties are defined using --variableName and accessed via var(--variableName). Example: :root { --main-color: #3498db; } div { color: var(--main-color); } They allow reusability and easier theming.",
          },
          {
            q: "Explain advanced CSS Grid properties like grid-template-areas, fr units, and minmax().",
            a: "grid-template-areas defines named grid areas for layout. fr units represent fractions of available space. minmax(min, max) sets a size range for rows/columns. Example: grid-template-columns: 1fr 2fr; defines two columns with proportional widths.",
          },
          {
            q: "Explain advanced Flexbox properties: flex-grow, flex-shrink, and align-self.",
            a: "flex-grow defines how much a flex item grows relative to others. flex-shrink defines how much it shrinks if space is limited. align-self allows overriding the container's align-items for individual items.",
          },
          {
            q: "What is stacking context and how does z-index work within it?",
            a: "Stacking context is a hierarchy of elements that determines how z-index is applied. Elements with a higher z-index in the same context appear on top. Some properties (position, opacity, transform) create new stacking contexts.",
          },
          {
            q: "Difference between CSS transitions and animations.",
            a: "Transitions animate properties when they change (on hover, focus, etc.). Animations with @keyframes allow continuous or looping animations independent of state changes.",
          },
          {
            q: "Explain overflow, visibility, and clipping in CSS.",
            a: "overflow controls content spilling out of a container (visible, hidden, scroll, auto). visibility: hidden hides element but keeps layout space. clip-path can crop element to a custom shape.",
          },
          {
            q: "Explain CSS selectors: attribute selectors and combinators (>, +, ~).",
            a: "Attribute selectors target elements with specific attributes (e.g., input[type='text']). Combinators: > (direct child), + (adjacent sibling), ~ (general sibling) define relationships between elements.",
          },
          {
            q: "What are browser prefixes and why are they used?",
            a: "Prefixes (-webkit-, -moz-, -ms-, -o-) are used to support experimental or vendor-specific CSS features before standard adoption. Example: -webkit-transition for Safari/Chrome.",
          },
        ],
      },
    ],
  },

  javascript: {
    title: "JavaScript",
    categories: [
      {
        name: "JavaScript Coding Questions",
        type: "coding",
        questions: [
          "Reverse a string without reverse().",
          "Check if a string is palindrome.",
          "Find first non-repeating character.",
          "Count frequency of characters in string.",
          "Find longest substring without repeating characters.",
          "Check if two strings are anagrams.",
          "Capitalize first letter of each word.",
          "Find occurrence of a substring in a string.",
          "Remove duplicate characters.",
          "Implement debounce + throttle with leading/trailing options",
          "Polyfill for Object.create",
          "Polyfill for Promise.race",
          "Implement asyncPool (limit concurrency for promises)",
          "Implement retry with exponential backoff",
          "Implement deep comparison of two objects",
          "Implement a function to check circular references in objects",
          "Write your own version of JSON.stringify and JSON.parse",
          "Implement a basic version of Event Delegation",
          "Implement an Observer pattern",
          "Longest palindrome substring.",
          "Reverse an array without reverse().",
          "Remove duplicates from array.",
          "Find intersection & union of arrays.",
          "Find two numbers with target sum.",
          "Rotate array k steps.",
          "Find maximum subarray sum (Kadane’s Algorithm).",
          "Flatten a nested array.",
          "Group array of objects by a key.",
          "Sort array of objects by key.",
          "Chunk array into smaller arrays.",
          "Deep clone vs shallow clone object.",
          "Count frequency of array elements using object.",
          "Convert array → object and object → array.",
          "Merge two objects deeply.",
          "Nested object flattening.",
          "Polyfill for map.",
          "Polyfill for filter.",
          "Polyfill for reduce.",
          "Polyfill for forEach.",
          "Polyfill for call.",
          "Polyfill for apply.",
          "Polyfill for bind.",
          "Polyfill for setInterval using setTimeout.",
          "Debounce function.",
          "Throttle function.",
          "Curry function.",
          "Once function (executes once only).",
          "Memoize function.",
          "Polyfill for Promise.",
          "Polyfill for Promise.all.",
          "Explain Event loop with example.",
          "Write sleep(ms) function using Promise.",
          "Retry API call with max retries.",
          "Parallel vs sequential API calls.",
          "Race condition handling example.",
          "Promise chaining vs async/await.",
          "Implement caching for API results.",
          "Rate limiting function.",
          "Lazy loading images logic.",
          "Infinite scroll implementation.",
          "Debounce search bar example.",
          "Implement publish/subscribe (event emitter).",
          "Custom setTimeout with clear.",
          "Implement LRU cache.",
          "Polyfill for instanceof.",
          "Polyfill for new keyword.",
          "Implement compose and pipe functions.",
          "Implement flatten deeply nested object.",
          "Implement “shuffle array” function.",
          "Implement cloneDeep utility.",
        ],
      },
      {
        type: "mock",
        name: "JavaScript (Mock)",
        questions: [
          {
            q: "Difference between var, let, and const?",
            a: "var is function-scoped and can be redeclared and updated. let and const are block-scoped. let can be updated but not redeclared, while const can neither be updated nor redeclared.",
          },
          {
            q: "What is hoisting? Which variables are hoisted?",
            a: "Hoisting is JavaScript's default behavior of moving declarations to the top. var declarations and function declarations are hoisted. let and const are hoisted but not initialized.",
          },
          {
            q: "Explain WeakMap and WeakSet, and their use cases?",
            a: "WeakMap is a collection of key-value pairs where keys are objects only and are weakly referenced (garbage collected if no other references exist). WeakSet is a collection of objects, also weakly referenced. Use cases: storing private data for objects, caching, avoiding memory leaks.",
          },
          {
            q: "What are common causes of memory leaks in JavaScript and how can they be prevented?",
            a: "Common causes: lingering closures holding references, forgotten timers/intervals, detached DOM nodes, global variables. Prevention: nullify references when not needed, clear timers, avoid global variables, use WeakMap/WeakSet for object associations.",
          },
          {
            q: "Explain LocalStorage, SessionStorage, and IndexedDB.",
            a: "LocalStorage stores key-value pairs permanently (until manually cleared). SessionStorage stores key-value pairs per session (cleared when browser/tab closes). IndexedDB is a NoSQL database for structured data storage, supports transactions and large amounts of data.",
          },
          {
            q: "Explain ES2020+ features: Optional chaining, Nullish coalescing, and BigInt.",
            a: "Optional chaining (?.) safely accesses nested object properties without errors. Nullish coalescing (??) returns right-hand value only if left-hand is null or undefined. BigInt allows representing integers larger than 2^53-1 safely.",
          },
          {
            q: "Explain block vs function scope.",
            a: "Block scope means variables are only accessible within the block {} they are declared in. let and const have block scope. Function scope means variables are accessible within the function they are declared in—this applies to var.",
          },
          {
            q: "What is a closure? Give a real-life example.",
            a: "A closure is a function that remembers its outer variables even after the outer function has finished execution. Example: a counter function that remembers the count across calls.",
          },
          {
            q: "How does this behave in functions/arrow functions?",
            a: "In regular functions, this depends on how the function is called. In arrow functions, this is lexically bound, i.e., it uses this from its surrounding scope.",
          },
          {
            q: "Difference between map and forEach?",
            a: "map returns a new array without mutating the original array. forEach simply executes a function for each item and returns undefined.",
          },
          {
            q: "What’s the difference between == and ===?",
            a: "== compares values after type coercion, while === compares both value and type strictly.",
          },
          {
            q: "What is event bubbling in the DOM?",
            a: "Event bubbling is when an event propagates from the innermost element to the outer elements. Capturing is the opposite.",
          },
          {
            q: "How does JavaScript code execute behind the scenes (Call Stack)?",
            a: "JavaScript uses a single-threaded call stack to manage function execution. Functions are pushed and popped as they are invoked and completed.",
          },
          {
            q: "Is setTimeout synchronous or asynchronous?",
            a: "setTimeout is asynchronous. It uses the browser’s Web APIs and pushes the callback to the task queue after the timer ends.",
          },
          {
            q: "What's the difference between null and undefined?",
            a: "null is an intentional absence of any value. undefined means a variable has been declared but not assigned a value.",
          },
          {
            q: "What are debounce and throttle, and why are they used?",
            a: "Both control how often a function runs. Debounce waits before running after the last event, while throttle limits execution to once in a given period.",
          },
          {
            q: "What is a Promise in JavaScript? How does async/await work?",
            a: "A Promise is an object representing eventual completion or failure of an async operation. async/await allows writing async code in a synchronous style using Promises.",
          },
          {
            q: "What is a callback function? How is it different from a Promise?",
            a: "A callback is a function passed to another function to be executed later. Promises provide cleaner, more manageable chaining for async operations.",
          },
          {
            q: "What is the Event Loop in JavaScript?",
            a: "The event loop is a mechanism that picks tasks from the task queue and executes them one by one after the call stack is empty.",
          },
          {
            q: "Name a few useful array methods and explain how they work.",
            a: "map(), filter(), reduce(), find(), and forEach() are common. Each performs different operations for transforming or searching arrays.",
          },
          {
            q: "Difference between synchronous and asynchronous code?",
            a: "Synchronous code runs line by line, blocking further execution until the current task finishes. Asynchronous code allows tasks to run in the background without blocking, using callbacks, Promises, or async/await.",
          },
          {
            q: "Difference between microtask queue and macrotask queue?",
            a: "Microtasks (like Promises, MutationObserver, queueMicrotask) are executed immediately after the current stack is cleared, before rendering. Macrotasks (like setTimeout, setInterval, setImmediate) run after microtasks, in the next event loop cycle.",
          },
          {
            q: "Difference between deep vs shallow equality check?",
            a: "Shallow equality (==, ===) only compares values at the top level. Deep equality checks all nested properties. Object.is is similar to === but treats NaN === NaN as true and +0 and -0 as different.",
          },
          {
            q: "What is event delegation?",
            a: "Event delegation is attaching a single event listener to a parent element to handle events on its child elements. It works because of event bubbling, improving performance and reducing memory usage.",
          },
          {
            q: "Difference between prototype, __proto__, and prototype chain?",
            a: "prototype is a property on functions used for inheritance. __proto__ is the internal reference of an object pointing to its prototype. The prototype chain is the series of links followed when looking up a property on an object.",
          },
          {
            q: "Difference between call stack and execution context?",
            a: "Call stack is the data structure that keeps track of function calls (LIFO). Execution context is the environment in which code runs (variables, scope, this). Each execution context is pushed onto the call stack.",
          },
          {
            q: "Difference between function declaration, function expression, and arrow function?",
            a: "Function declaration is hoisted and can be called before it is defined. Function expression is not hoisted, defined when execution reaches it. Arrow functions are shorter, don’t have their own this, arguments, or prototype.",
          },
          {
            q: "Difference between mutable and immutable objects in JS?",
            a: "Mutable objects can be changed after creation (arrays, objects). Immutable values cannot be changed once created (strings, numbers, booleans). To change immutable values, a new value must be created.",
          },
          {
            q: "Difference between ES6 modules and CommonJS?",
            a: "ES6 modules use import/export syntax, are statically analyzed, and run in strict mode by default. CommonJS uses require/module.exports, loads modules dynamically, and is used in Node.js.",
          },
          {
            q: "What is a Service Worker and how does it relate to PWA?",
            a: "A Service Worker is a background script that intercepts network requests, enables offline caching, push notifications, and background sync. It’s a key part of Progressive Web Apps (PWA) to make them work offline and improve performance.",
          },

          {
            q: "What’s the difference between spread and rest operators?",
            a: "The spread operator (...) expands arrays/objects. The rest operator collects multiple elements into a single array.",
          },
          {
            q: "What is destructuring in JavaScript? Provide an example.",
            a: "Destructuring is unpacking values from arrays or properties from objects into variables. Example: const [a, b] = [1, 2];",
          },
          {
            q: "What is the difference between shallow and deep copy?",
            a: "Shallow copy copies top-level properties, while deep copy recursively copies all nested levels.",
          },
          {
            q: "Explain type coercion and type conversion in JavaScript.",
            a: "Type coercion is JS automatically converting one data type to another, e.g., '5' + 2 = '52'. Type conversion is manually converting types using Number(), String(), Boolean(), etc.",
          },
          {
            q: "What are the quirks of typeof operator?",
            a: "typeof null returns 'object' (historical bug). Symbols, BigInt are unique types. Arrays return 'object'. Use Array.isArray() to check arrays.",
          },
          {
            q: "Explain prototype and inheritance patterns in JavaScript.",
            a: "Every object has a prototype. Functions have a 'prototype' property used for inheritance. Use Object.create() or ES6 class + extends for inheritance. Prototype chain resolves properties.",
          },
          {
            q: "What are higher-order functions in JavaScript?",
            a: "Functions that take other functions as arguments or return a function. Examples: map(), filter(), reduce(), sort(), some(), every().",
          },
          {
            q: "Explain the Event Loop with an example.",
            a: "The event loop processes tasks: call stack executes functions, task queue holds async callbacks. Microtasks (Promises) run before macrotasks (setTimeout). Example: console.log('1'); setTimeout(()=>console.log('2')); Promise.resolve().then(()=>console.log('3')); prints 1, 3, 2.",
          },
          {
            q: "Explain optional chaining and nullish coalescing (ES2020+).",
            a: "Optional chaining (?.) safely accesses nested properties without errors. Nullish coalescing (??) returns right-hand value if left-hand is null or undefined. Example: let x = obj?.prop ?? 'default';",
          },
          {
            q: "How does error handling work in JavaScript, especially async errors?",
            a: "Use try/catch/finally to catch synchronous errors. For async, wrap await calls in try/catch, or use .catch() with Promises.",
          },
          {
            q: "Explain Symbols and Iterators in JavaScript.",
            a: "Symbols are unique identifiers for object properties. Iterators (via Symbol.iterator) allow objects to be iterable, e.g., for...of loop. Generators (function*) create custom iterators.",
          },
          {
            q: "Difference between Set, Map, and Object in JavaScript.",
            a: "Set stores unique values. Map stores key-value pairs and preserves insertion order. Object stores key-value pairs but keys are strings/symbols only and order is not guaranteed.",
          },
          {
            q: "Useful string methods in JavaScript.",
            a: "includes() checks substring, startsWith()/endsWith() check positions, padStart()/padEnd() add padding. Example: 'JS'.padStart(5, '*') → '**JS'",
          },
          {
            q: "Useful number methods in JavaScript.",
            a: "Number.isNaN(), Number.isInteger(), toFixed(), parseInt(), parseFloat() help with conversions and formatting.",
          },
          {
            q: "How to use JSON methods and common pitfalls?",
            a: "JSON.parse() converts JSON string to object. JSON.stringify() converts object to JSON string. Pitfall: functions and undefined values are lost during stringify.",
          },
          {
            q: "What is currying in JavaScript?",
            a: "Currying is converting a function with multiple arguments into a sequence of functions each taking one argument. Example: f(a)(b)(c).",
          },
          {
            q: "What is garbage collection in JavaScript?",
            a: "Garbage collection is the automatic process of freeing up memory by removing objects that are no longer accessible in the code. JavaScript uses algorithms like mark-and-sweep to do this.",
          },
          {
            q: "What are default parameters in JavaScript?",
            a: "Default parameters allow you to initialize function parameters with default values if no value is passed.",
          },
        ],
      },
    ],
  },

  react: {
    title: "ReactJS",
    categories: [
      {
        name: "ReactJS Coding Questions",
        type: "coding",
        questions: [
          "Build a counter with increment, decrement, and reset",
          "Build a Todo app with add, edit, delete, and filter features",
          "Fetch API data and display loading/error states",
          "Implement form validation using controlled components",
          "Create a Dark/Light theme toggle",
          "Implement infinite scroll in React",
          "Create a debounced search input",
          "Build a custom hook (useFetch, useLocalStorage)",
          "Lazy load a component using React.lazy and Suspense",
          "Build a component with an Error Boundary",
          "Create a Swipeable List Item with react-native-gesture-handler",
        ],
      },
      {
        type: "mock",
        name: "ReactJS (Mock)",
        questions: [
          {
            q: "What is React?",
            a: "A JavaScript library for building UIs using components.",
          },
          {
            q: "What are components in React?",
            a: "Reusable pieces of UI. Functional (common) and Class (older).",
          },
          {
            q: "What is JSX?",
            a: "JavaScript XML. Allows writing HTML-like syntax in JS.",
          },
          {
            q: "What is React StrictMode and why do some lifecycle methods run twice in development?",
            a: "React StrictMode is a tool for highlighting potential problems in an app. In development, it intentionally double-invokes certain lifecycle methods (like constructor, render, and useEffect setup/cleanup) to help detect side effects and unsafe code.",
          },
          {
            q: "What are the rules and patterns for creating custom hooks in React?",
            a: "Custom hooks must start with 'use' and follow the Rules of Hooks: only call hooks at the top level and from React functions. They allow sharing logic between components. Pitfalls include incorrect dependency arrays and causing unnecessary re-renders if state management is not handled carefully.",
          },
          {
            q: "How is error handling done in React, especially for async operations?",
            a: "React catches errors in rendering, lifecycle methods, and constructors using Error Boundaries. Async errors (like API calls in useEffect) need to be handled with try/catch or .catch on Promises, because Error Boundaries do not catch async errors automatically.",
          },
          {
            q: "What are the basics of testing in React using Jest and React Testing Library?",
            a: "Jest is a JavaScript testing framework for running and asserting tests. React Testing Library focuses on testing components via their UI behavior, simulating user interactions rather than implementation details. Shallow rendering tests individual components, while deep rendering tests nested components.",
          },
          {
            q: "What are props in React?",
            a: "Props are inputs passed from parent to child. Read-only.",
          },
          {
            q: "What is state in React?",
            a: "State is data managed within a component, causes re-render when updated.",
          },
          {
            q: "Difference between props and state?",
            a: "Props are external + immutable. State is internal + mutable.",
          },
          {
            q: "What are hooks in React?",
            a: "Functions to use React features (useState, useEffect).",
          },
          {
            q: "useState vs useEffect?",
            a: "useState stores state. useEffect handles side effects.",
          },
          {
            q: "What is useEffect used for?",
            a: "API calls, subscriptions, DOM updates.",
          },
          {
            q: "What is the Virtual DOM?",
            a: "Lightweight copy of DOM. React diffs + updates efficiently.",
          },
          {
            q: "What is conditional rendering?",
            a: "Render based on conditions using ternary/if.",
          },
          {
            q: "How to handle forms in React?",
            a: "Use controlled components with state.",
          },
          {
            q: "What is lifting state up?",
            a: "Moving state to common parent to share among children.",
          },
          {
            q: "What is prop drilling?",
            a: "Passing props through multiple levels unnecessarily.",
          },
          {
            q: "What is React Context API?",
            a: "Global state management, avoids prop drilling.",
          },
          {
            q: "What is React Router?",
            a: "Library for navigation/routing in SPA.",
          },
          {
            q: "What is a key in React lists?",
            a: "Unique identifier for list items to optimize re-renders.",
          },
          {
            q: "Difference between controlled and uncontrolled components?",
            a: "Controlled components have their form data managed by React state, meaning value is set via state and updated with onChange. Uncontrolled components store their own state internally and are accessed using refs. Controlled gives more control, uncontrolled is simpler.",
          },
          {
            q: "Difference between useMemo and useCallback?",
            a: "useMemo memoizes the result of a calculation (returns a value). useCallback memoizes the function itself (returns a memoized callback). Both help prevent unnecessary re-renders by keeping stable references.",
          },
          {
            q: "What is reconciliation in React?",
            a: "Reconciliation is React’s process of updating the DOM efficiently. React compares the Virtual DOM with the previous version (diffing) and only updates the parts that changed in the real DOM.",
          },
          {
            q: "Difference between server-side rendering (SSR) and client-side rendering (CSR)?",
            a: "CSR renders content in the browser after JS loads, leading to slower first paint but faster navigation. SSR pre-renders content on the server and sends HTML to the client, improving initial load and SEO.",
          },
          {
            q: "What is hydration in React?",
            a: "Hydration is attaching event listeners and React logic to static HTML that was rendered on the server. It makes a server-rendered app interactive on the client.",
          },
          {
            q: "Difference between React.lazy and React.Suspense?",
            a: "React.lazy allows you to lazy load components using dynamic import. React.Suspense is a wrapper that shows fallback UI while the lazy component is loading. They are often used together for code splitting.",
          },
          {
            q: "What are Error Boundaries in React?",
            a: "Error Boundaries are React components that catch JavaScript errors in child components during rendering, lifecycle methods, and constructors. They prevent the entire app from crashing and display fallback UI.",
          },
          {
            q: "React 18 new features?",
            a: "React 18 introduced concurrent rendering (improves responsiveness by interrupting rendering), useTransition (marks updates as non-urgent), useDeferredValue (defers re-render of non-urgent values), automatic batching, and improved Suspense support.",
          },
          {
            q: "Difference between Redux and Context API?",
            a: "Context API is built into React for simple state sharing but not optimized for complex state logic. Redux is an external library providing predictable state management, middleware support, dev tools, and better scalability for large apps.",
          },
          {
            q: "Difference between CSR, SSR, SSG, ISR?",
            a: "CSR: content rendered in browser after JS loads. SSR: content pre-rendered on server at request time. SSG (Static Site Generation): pages generated at build time, super fast for static content. ISR (Incremental Static Regeneration): allows static pages to be regenerated in background after deployment without rebuilding the whole site. Important in Next.js.",
          },
          {
            q: "Explain StrictMode and why lifecycle methods are invoked twice in development?",
            a: "StrictMode is a development tool that highlights potential problems in an app. In React 18, it intentionally double-invokes certain lifecycle methods and functions (like useEffect cleanup and component render) to help detect side effects. This does not happen in production.",
          },
          {
            q: "What are custom hook patterns, and what are common pitfalls?",
            a: "Custom hooks allow you to extract reusable logic from components. Rules: hooks must start with 'use', follow React rules (only call at top level, not in loops/conditions). Pitfalls include overcomplicating logic, breaking encapsulation, and not handling dependencies correctly.",
          },
          {
            q: "How does React handle error boundaries, and why don’t they catch async errors?",
            a: "Error boundaries are React components that catch errors in rendering, lifecycle methods, and constructors below them. They do not catch errors in async code (e.g., setTimeout, promises) or event handlers. For async errors, you need try/catch, promise.catch, or global error handling.",
          },
          {
            q: "What’s the difference between Jest and React Testing Library?",
            a: "Jest is a JavaScript testing framework for running unit tests, mocking, and assertions. React Testing Library focuses on testing React components by simulating user interactions and querying the DOM, ensuring tests reflect real-world usage instead of implementation details.",
          },
          {
            q: "What is a React Portal and when would you use it?",
            a: "A portal allows rendering children into a DOM node outside the parent component’s DOM hierarchy. Common use cases: modals, tooltips, popovers where elements must visually break out of container boundaries.",
          },
          {
            q: "Explain Higher-Order Components (HOC) and Render Props.",
            a: "HOCs are functions that take a component and return a new component, adding extra functionality (e.g., withAuth). Render props involve passing a function as a prop to share logic. Both are older patterns, mostly replaced by hooks but still seen in codebases.",
          },
          {
            q: "What are some important React Router hooks?",
            a: "React Router provides hooks like useNavigate (for navigation), useParams (get dynamic route params), useLocation (access current URL object), and useSearchParams (manage query params).",
          },
          {
            q: "What is React Reconciliation?",
            a: "Reconciliation is React’s process of updating the DOM. React compares the virtual DOM with the previous snapshot using a diffing algorithm. It re-renders only the changed parts instead of replacing the whole UI.",
          },
          {
            q: "How does React handle hydration in SSR?",
            a: "Hydration is when React attaches event listeners and reuses the existing server-rendered HTML instead of re-rendering it. This makes SSR apps interactive quickly without discarding the HTML sent by the server.",
          },
          {
            q: "What is Suspense and how is it used?",
            a: "Suspense lets components wait for something (like data fetching or lazy loading) before rendering. You wrap parts of your UI in <Suspense fallback={...}> to show a fallback while waiting. In React 18, it integrates with concurrent rendering and data fetching.",
          },
          {
            q: "What are React 18 Concurrent features?",
            a: "React 18 introduced concurrent rendering with features like useTransition (mark updates as non-urgent), Suspense for data fetching, and automatic batching of state updates. This improves responsiveness and smooth UI rendering.",
          },
          {
            q: "Explain Controlled vs Uncontrolled components in forms.",
            a: "Controlled components have their form values managed by React state. Uncontrolled components rely on refs to access values directly from the DOM. Controlled offers better validation and control, uncontrolled is simpler for quick forms.",
          },
          {
            q: "Compare Context API and Redux for state management.",
            a: "Context API is best for small to medium apps with simple global state. Redux is more powerful, providing middleware, dev tools, predictable state flow, and better suited for large apps with complex state logic.",
          },
          {
            q: "What’s the difference between CSR, SSR, SSG, and ISR?",
            a: "CSR: rendering on client side (slower first load). SSR: HTML generated on server for each request. SSG: pre-rendered HTML at build time (fast, static). ISR: allows static pages to update at intervals without full rebuild.",
          },
          {
            q: "How do you optimize React app performance?",
            a: "Techniques: memoization (React.memo, useMemo, useCallback), code splitting with React.lazy, avoiding unnecessary re-renders, virtualization for large lists, and using Suspense + concurrent features.",
          },
          {
            q: "What is a React Profiler?",
            a: "The React Profiler (in React DevTools) helps measure rendering performance. It shows how often components render, why they rendered, and how long each render took, allowing developers to identify bottlenecks.",
          },
          {
            q: "What is useRef?",
            a: "Mutable object that persists across renders, often for DOM access.",
          },
          {
            q: "What is memoization in React?",
            a: "Caching results of expensive calcs. Tools: React.memo, useMemo, useCallback.",
          },
          {
            q: "How is performance optimized in React?",
            a: "Code splitting, memoization, lazy loading, avoiding re-renders.",
          },
        ],
      },
    ],
  },

  nextjs: {
    title: "NextJS",
    categories: [
      {
        name: "Next JS (Mock)",
        type: "mock",
        questions: [
          {
            q: "What is Next.js?",
            a: "Next.js is a React framework for building server-side rendered (SSR) and statically generated web applications with features like routing, API routes, and optimized performance.",
          },
          {
            q: "What are the key features of Next.js?",
            a: "Key features include Server-Side Rendering (SSR), Static Site Generation (SSG), Incremental Static Regeneration (ISR), API routes, image optimization, built-in CSS and Sass support, and fast refresh.",
          },
          {
            q: "What is the difference between SSR and SSG in Next.js?",
            a: "SSR (Server-Side Rendering) generates HTML on each request, while SSG (Static Site Generation) generates HTML at build time and serves the static files.",
          },
          {
            q: "What is Incremental Static Regeneration (ISR)?",
            a: "ISR allows static pages to be updated after build time without rebuilding the entire site, by specifying a revalidation period.",
          },
          {
            q: "What are Next.js API routes?",
            a: "API routes let you build backend endpoints directly in a Next.js app under the 'pages/api' folder. Each file maps to an API endpoint.",
          },
          {
            q: "What is the 'getStaticProps' function?",
            a: "getStaticProps fetches data at build time for SSG pages. It returns props that are passed to the page component.",
          },
          {
            q: "What is the 'getServerSideProps' function?",
            a: "getServerSideProps fetches data on each request for SSR pages. It returns props to the page component dynamically.",
          },
          {
            q: "What is 'getStaticPaths' used for?",
            a: "getStaticPaths is used with dynamic routes and SSG to pre-render pages based on a list of paths.",
          },
          {
            q: "What is the difference between 'next/link' and 'next/router'?",
            a: "next/link is used for client-side navigation via anchor tags, while next/router provides programmatic routing and route info in components.",
          },
          {
            q: "What is Image Optimization in Next.js?",
            a: "Next.js optimizes images using the 'next/image' component by automatically resizing, lazy loading, and serving modern formats like WebP.",
          },
          {
            q: "What is the difference between Client-Side Rendering (CSR) and SSR in Next.js?",
            a: "CSR renders pages entirely in the browser using React, while SSR renders pages on the server before sending HTML to the client.",
          },
          {
            q: "How does Next.js handle CSS and Sass?",
            a: "Next.js supports CSS Modules and global CSS imports. Sass can also be used by installing 'sass' and importing '.scss' files.",
          },
          {
            q: "What is the role of '_app.js' in Next.js?",
            a: "_app.js allows customizing the default App component to keep state, add global CSS, or wrap components with layouts across pages.",
          },
          {
            q: "What is the role of '_document.js' in Next.js?",
            a: "_document.js customizes the HTML document structure (like <html> or <body> tags) and is used only on the server side.",
          },
          {
            q: "How does Next.js support environment variables?",
            a: "Next.js uses .env.local, .env.development, and .env.production files. Variables prefixed with NEXT_PUBLIC_ are exposed to the client.",
          },
          {
            q: "What are the differences between dynamic and static routes in Next.js?",
            a: "Static routes have fixed URLs and correspond to files in 'pages'. Dynamic routes use bracket syntax [param] for URL parameters.",
          },
          {
            q: "How does Next.js handle API route authentication?",
            a: "Authentication in API routes is handled using middleware or directly checking headers, cookies, or JWT tokens inside the route handler.",
          },
          {
            q: "What is the difference between a Next.js page and a component?",
            a: "A page is a React component exported from the 'pages' directory and automatically becomes a route, while a component is reusable and can be used inside pages.",
          },
          {
            q: "How can you deploy a Next.js app?",
            a: "Next.js apps can be deployed on Vercel (official), Netlify, AWS, or any server supporting Node.js. Static apps can also be exported using 'next export'.",
          },
          {
            q: "What is the difference between 'next export' and normal Next.js build?",
            a: "'next export' generates a fully static app with no server-side functionality. Normal 'next build' allows SSR, ISR, and API routes.",
          },
          {
            q: "What is Middleware in Next.js?",
            a: "Middleware allows running code before a request is completed, useful for authentication, redirects, or modifying requests/responses globally.",
          },
          {
            q: "How does Next.js support internationalization (i18n)?",
            a: "Next.js has built-in i18n support in 'next.config.js', allowing multiple locales, default locale, and automatic locale detection.",
          },
          {
            q: "What is the difference between useRouter and withRouter?",
            a: "useRouter is a React hook to access the router object inside functional components, while withRouter is an HOC used with class components.",
          },
          {
            q: "How to optimize performance in Next.js?",
            a: "Use image optimization, SSR or SSG, code-splitting, dynamic imports, caching headers, and avoiding unnecessary client-side JS.",
          },
          {
            q: "Can you explain Next.js routing system?",
            a: "Next.js uses file-based routing. Each file in 'pages' becomes a route. Dynamic routes use [param] syntax and catch-all routes use [...param].",
          },
          {
            q: "What are Next.js Layouts?",
            a: "Layouts are reusable structures wrapping pages for common UI patterns, often implemented by adding a 'getLayout' function in '_app.js'.",
          },
          {
            q: "What is the difference between shallow routing and normal routing?",
            a: "Shallow routing changes the URL without running data fetching methods like getServerSideProps, keeping the page state intact.",
          },
          {
            q: "What are Next.js fallback options in getStaticPaths?",
            a: "Fallback options are 'false' (404 for missing paths), 'true' (render page on first request), and 'blocking' (SSR-like behavior for missing paths).",
          },
          {
            q: "What is a custom server in Next.js?",
            a: "A custom server allows using Express, Koa, or other Node servers to handle requests before passing them to Next.js for more control.",
          },
        ],
      },
    ],
  },

  reactnative: {
    title: "React Native",
    categories: [
      {
        name: "React Native Coding Questions",
        type: "coding",
        questions: [
          "Build a Counter App with Increment/Decrement buttons.",
          "Create a Todo List App where you can add, display, and delete items.",
          "Fetch data from an API (e.g., jsonplaceholder) and render it in a FlatList.",
          "Custom hook for using AsyncStorage.",
          "Implement pull-to-refresh in FlatList.",
          "Add swipe-to-delete in FlatList.",
          "Integrate camera access (take picture).",
          "Implement a simple authentication flow (login/logout persistence).",
          "Implement custom modal with animation.",
          "Offline-first API caching.",
          "Implement Navigation between two screens using react-navigation.",
          "Create a simple Login Form with validation (show error if fields are empty).",
          "Build a Stopwatch/Timer app using hooks.",
          "Upload and display an image from device gallery using react-native-image-picker.",
          "Implement a Dark Mode toggle using Context API.",
          "Build a Weather App fetching real-time weather API.",
          "Make a Reusable Custom Button Component with props.",
          "Store and retrieve data using AsyncStorage.",
          "Implement a Bottom Tab Navigation with 3 screens.",
          "Build a Search Filter in FlatList.",
          "Create a Swipeable List Item with react-native-gesture-handler.",
          "Implement Push Notifications (Firebase Cloud Messaging).",
          "Build a Chat UI with GiftedChat.",
          "Create an infinite scroll list with API pagination.",
          "Implement Animations with react-native-reanimated.",
          "Integrate a MapView with markers.",
          "Use Redux/Context API for global state management.",
        ],
      },
      {
        name: "React Native (Mock)",
        type: "mock",
        questions: [
          {
            q: "What is React Native?",
            a: "React Native is a framework for building native mobile apps using JavaScript and React.",
          },
          {
            q: "How is React Native different from React?",
            a: "React is for building web UIs. React Native is for building mobile apps that run natively on iOS and Android.",
          },
          {
            q: "What are some common React Native components?",
            a: "View, Text, ScrollView, FlatList, SectionList, TouchableOpacity, Pressable, Image.",
          },
          {
            q: "How does styling work in React Native?",
            a: "React Native uses JavaScript objects for styles instead of CSS. It relies on Flexbox for layout.",
          },
          {
            q: "How do you handle navigation in React Native?",
            a: "Using libraries like React Navigation (Stack, Tab, Drawer) or React Native Navigation.",
          },

          {
            q: "What is the role of the React Native bridge?",
            a: "It connects JavaScript code with native platform code, enabling React Native to call native modules.",
          },
          {
            q: "What is the Metro bundler?",
            a: "Metro is the JavaScript bundler for React Native. It compiles and serves your JavaScript code to the app.",
          },
          {
            q: "How does React Native render UI?",
            a: "It uses native components under the hood instead of HTML elements, providing a truly native look and feel.",
          },
          {
            q: "How do you manage state in React Native?",
            a: "By using useState, useReducer, Context API, or external libraries like Redux, Zustand, or MobX.",
          },
          {
            q: "How do you share data across screens?",
            a: "Using Context API, Redux, or passing props through navigation parameters.",
          },
          {
            q: "How do you optimize FlatList performance?",
            a: "Use keyExtractor, getItemLayout, initialNumToRender, windowSize, and memoization with React.memo.",
          },
          {
            q: "How do you handle performance issues in React Native?",
            a: "By using useMemo, useCallback, optimizing renders, lazy loading, and minimizing re-renders.",
          },
          {
            q: "How do you handle API calls in React Native?",
            a: "Using Fetch API, Axios, or libraries like React Query for data fetching and caching.",
          },
          {
            q: "How do you store data locally?",
            a: "Using AsyncStorage, SecureStore, or SQLite for persistent storage.",
          },
          {
            q: "How do you handle offline mode in React Native?",
            a: "By caching data locally with AsyncStorage or SQLite, and syncing when online.",
          },
          {
            q: "Difference between React Native and NativeScript?",
            a: "React Native uses React + JavaScript to build native apps with a component model. NativeScript allows Angular, Vue, or Vanilla JS to access native APIs directly. React Native relies on community libraries, while NativeScript gives more direct native access.",
          },
          {
            q: "How React Native handles thread model (UI thread vs JS thread)?",
            a: "React Native runs JS code on a separate JS thread while UI updates happen on the main UI thread. Communication occurs via a bridge. Blocking the JS thread can cause UI lag, so async operations and offloading heavy tasks are crucial.",
          },
          {
            q: "What is Hermes engine?",
            a: "Hermes is an open-source JavaScript engine optimized for React Native. It reduces app startup time, memory usage, and bundle size by compiling JS to bytecode, improving performance on mobile devices.",
          },
          {
            q: "Difference between Expo and bare React Native?",
            a: "Expo provides a managed workflow with pre-built modules, making development faster but limiting custom native code. Bare React Native gives full control over native modules, requiring more setup but allowing advanced customizations.",
          },
          {
            q: "How to optimize app bundle size?",
            a: "Use Hermes engine, tree-shake unused code, compress images, dynamically import modules, remove unused dependencies, and enable Proguard (Android) or Bitcode (iOS) to reduce app size.",
          },
          {
            q: "How to handle offline-first apps?",
            a: "Use local storage solutions like AsyncStorage, SQLite, or Redux-Persist to cache data. Sync with server when online. Offline-first apps rely on local persistence and background sync for a smooth experience.",
          },
          {
            q: "What are Native Modules in React Native?",
            a: "Native modules are pieces of code written in Java (Android) or Objective-C/Swift (iOS) that React Native can call.",
          },
          {
            q: "When would you write a custom native module?",
            a: "When React Native does not support a specific device feature like Bluetooth, NFC, or background services.",
          },
          {
            q: "What layout system does React Native use?",
            a: "React Native uses Flexbox for layout, similar to web but with slight differences.",
          },
          {
            q: "How do you handle responsive design in React Native?",
            a: "By using Dimensions API, Flexbox, percentage-based widths, or libraries like react-native-responsive-screen.",
          },
          {
            q: "What are the types of navigation in React Native?",
            a: "Stack, Tab, Drawer, and nested navigators using React Navigation.",
          },
          {
            q: "What is the difference between Stack and Drawer navigation?",
            a: "Stack navigation manages a history of screens, while Drawer navigation slides in from the side for global navigation.",
          },
          {
            q: "How do you handle animations in React Native?",
            a: "Using the Animated API, LayoutAnimation, or libraries like Reanimated and React Native Gesture Handler.",
          },
          {
            q: "What is the difference between Animated API and Reanimated?",
            a: "Animated API runs animations on the JS thread, while Reanimated can run animations on the native thread for smoother performance.",
          },
          {
            q: "How do you debug a React Native app?",
            a: "Using React Native Debugger, Flipper, or Chrome DevTools.",
          },
          {
            q: "What testing frameworks are used in React Native?",
            a: "Jest for unit testing, React Native Testing Library for component testing, and Detox for end-to-end testing.",
          },
          {
            q: "How do you build a React Native app for iOS?",
            a: "Using Xcode or command line tools, then archive and upload to the App Store.",
          },
          {
            q: "How do you build a React Native app for Android?",
            a: "Using Android Studio or Gradle, then generate an APK or AAB and upload to the Play Store.",
          },
          {
            q: "What is the difference between APK and AAB?",
            a: "APK is a single Android app package, while AAB is Android App Bundle which lets Google Play generate optimized APKs per device.",
          },
          {
            q: "What are the limitations of React Native?",
            a: "Performance for very complex apps, reliance on third-party libraries, and sometimes needing native code for advanced features.",
          },
          {
            q: "How does React Native compare with Flutter?",
            a: "React Native uses JavaScript and native components, while Flutter uses Dart and draws its own UI with Skia engine.",
          },
          {
            q: "What is CodePush in React Native?",
            a: "CodePush allows you to push JavaScript and assets updates directly to users without going through app stores.",
          },
        ],
      },
    ],
  },

  nodejs: {
    title: "NodeJS",
    categories: [
      {
        name: "Node JS (Mock)",
        type: "mock",
        questions: [
          {
            q: "What is Node.js?",
            a: "Node.js is a JavaScript runtime built on Chrome's V8 engine that allows executing JS on the server-side.",
          },
          {
            q: "What are the features of Node.js?",
            a: "Features include event-driven architecture, non-blocking I/O, single-threaded nature, scalability, fast performance, and NPM ecosystem.",
          },
          {
            q: "What is the difference between Node.js and JavaScript in the browser?",
            a: "JavaScript runs in the browser for client-side scripting, while Node.js runs on the server and allows building backend applications.",
          },
          {
            q: "What is the Event Loop in Node.js?",
            a: "The Event Loop handles asynchronous callbacks in Node.js, allowing non-blocking I/O by executing code, collecting events, and processing queued tasks.",
          },
          {
            q: "What are Node.js modules?",
            a: "Modules are reusable blocks of code. Node.js has built-in modules like 'fs', 'http', 'path', and also supports custom modules and NPM packages.",
          },
          {
            q: "What is the difference between require() and import in Node.js?",
            a: "require() is CommonJS syntax, traditionally used in Node.js. import is ES6 module syntax, used with 'type': 'module' in package.json.",
          },
          {
            q: "What is NPM?",
            a: "NPM (Node Package Manager) is used to install, manage, and share packages and dependencies for Node.js applications.",
          },
          {
            q: "What is the difference between synchronous and asynchronous functions in Node.js?",
            a: "Synchronous functions block code execution until finished. Asynchronous functions allow the next code to run while waiting for operations like I/O.",
          },
          {
            q: "What is a callback function in Node.js?",
            a: "A callback is a function passed as an argument to another function to execute after an asynchronous task completes.",
          },
          {
            q: "What is a Promise in Node.js?",
            a: "A Promise represents the eventual completion or failure of an asynchronous operation, providing then() and catch() for handling results.",
          },
          {
            q: "What is async/await in Node.js?",
            a: "async/await is syntax sugar over Promises, making asynchronous code look synchronous and easier to read and manage.",
          },
          {
            q: "What is the difference between process.nextTick() and setImmediate()?",
            a: "process.nextTick() executes before the next event loop tick, while setImmediate() executes after the current poll phase in the next loop iteration.",
          },
          {
            q: "What is the difference between readFileSync() and readFile() in Node.js?",
            a: "readFileSync() reads a file synchronously blocking code execution. readFile() reads a file asynchronously without blocking the event loop.",
          },
          {
            q: "What is the difference between require.cache and module.exports?",
            a: "require.cache stores loaded modules to avoid reloading. module.exports defines what a module exposes to other files.",
          },
          {
            q: "What are streams in Node.js?",
            a: "Streams are objects for reading/writing data piece by piece instead of all at once. Types: Readable, Writable, Duplex, Transform.",
          },
          {
            q: "What is the difference between Buffer and Stream?",
            a: "Buffer stores data in memory at once, while Stream handles data in chunks for better memory efficiency.",
          },
          {
            q: "What is Express.js?",
            a: "Express.js is a minimal, fast Node.js framework for building web applications and APIs with routing, middleware, and easy setup.",
          },
          {
            q: "What are middleware in Express.js?",
            a: "Middleware are functions that process requests before reaching the route handler or after, for tasks like logging, authentication, and parsing.",
          },
          {
            q: "How do you handle errors in Node.js?",
            a: "Errors can be handled using try/catch for synchronous code, Promise.catch for asynchronous code, and Express error-handling middleware for web apps.",
          },
          {
            q: "What is the difference between cluster module and child process in Node.js?",
            a: "Cluster module allows scaling Node apps across CPU cores, sharing server ports. Child process runs separate processes for tasks without sharing ports.",
          },
          {
            q: "What is the difference between process.env and dotenv?",
            a: "process.env accesses environment variables at runtime. dotenv is a library to load variables from a .env file into process.env.",
          },
          {
            q: "What are event emitters in Node.js?",
            a: "Event Emitters allow emitting and listening for custom events using the EventEmitter class.",
          },
          {
            q: "What is the difference between setTimeout() and setImmediate()?",
            a: "setTimeout() schedules code after a minimum delay. setImmediate() executes code after the current poll phase of the event loop.",
          },
          {
            q: "What is REST API in Node.js?",
            a: "A REST API is an interface following REST principles, allowing client-server communication over HTTP using GET, POST, PUT, DELETE methods.",
          },
          {
            q: "What is WebSocket in Node.js?",
            a: "WebSocket is a protocol for full-duplex communication between server and client in real-time apps, often used with the 'ws' package.",
          },
          {
            q: "What is the difference between require() and import() dynamic import?",
            a: "require() is synchronous CommonJS, import() is an asynchronous ES6 dynamic import returning a Promise.",
          },
          {
            q: "How do you secure a Node.js application?",
            a: "Use HTTPS, sanitize inputs, handle errors properly, use authentication (JWT, OAuth), manage environment variables securely, and avoid exposing sensitive info.",
          },
          {
            q: "What is the difference between synchronous and asynchronous error handling in Node.js?",
            a: "Synchronous errors are caught with try/catch. Asynchronous errors need callbacks with error arguments, Promises, or async/await with try/catch.",
          },
          {
            q: "What is the role of package.json in Node.js?",
            a: "package.json manages project metadata, dependencies, scripts, and configuration for Node.js projects.",
          },
        ],
      },
    ],
  },

  expressjs: {
    title: "ExpressJS",
    categories: [
      {
        name: "Express JS (Mock)",
        type: "mock",
        questions: [
          {
            q: "What is Express.js?",
            a: "Express.js is a minimal, fast, and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.",
          },
          {
            q: "Why do we use Express.js?",
            a: "Express simplifies server-side development, provides routing, middleware support, template engines, and makes building REST APIs faster and easier.",
          },
          {
            q: "What are middleware in Express.js?",
            a: "Middleware are functions executed during the request-response cycle that can modify requests, responses, or end the cycle. They are used for logging, authentication, error handling, etc.",
          },
          {
            q: "What are the types of middleware in Express.js?",
            a: "1) Application-level middleware, 2) Router-level middleware, 3) Error-handling middleware, 4) Built-in middleware, 5) Third-party middleware.",
          },
          {
            q: "What is routing in Express.js?",
            a: "Routing refers to defining endpoints (URLs) for the application and specifying how the server should respond to client requests (GET, POST, PUT, DELETE, etc.).",
          },
          {
            q: "What are route parameters in Express.js?",
            a: "Route parameters are dynamic segments of a URL captured using :paramName syntax in routes, allowing us to access data from the URL via req.params.",
          },
          {
            q: "What is the difference between app.use() and app.get()?",
            a: "app.use() mounts middleware for all HTTP methods or paths, while app.get() handles only GET requests for a specific route.",
          },
          {
            q: "What is the difference between req.params, req.query, and req.body?",
            a: "req.params: URL parameters, req.query: query string parameters, req.body: data sent in the request body (usually POST/PUT).",
          },
          {
            q: "How do you handle errors in Express.js?",
            a: "Using error-handling middleware with four arguments (err, req, res, next), and by passing errors to next(err) from routes or middleware.",
          },
          {
            q: "What is Express Router?",
            a: "Express Router is a mini-app or modular way to handle routes separately for better organization, mounted using app.use().",
          },
          {
            q: "What are some commonly used built-in middleware in Express?",
            a: "express.json() for parsing JSON, express.urlencoded() for form data, express.static() for serving static files.",
          },
          {
            q: "How do you serve static files in Express.js?",
            a: "Use express.static() middleware, e.g., app.use(express.static('public')) to serve files from the 'public' folder.",
          },
          {
            q: "How to handle CORS in Express.js?",
            a: "CORS (Cross-Origin Resource Sharing) can be handled using the 'cors' package or by manually setting headers like Access-Control-Allow-Origin.",
          },
          {
            q: "What is the difference between app.listen() and http.createServer()?",
            a: "app.listen() is a shortcut in Express to create and start an HTTP server. http.createServer() is the Node.js way to create a server manually.",
          },
          {
            q: "How to redirect a request in Express.js?",
            a: "Use res.redirect() with the target URL, e.g., res.redirect('/home') or res.redirect('https://example.com').",
          },
          {
            q: "What is the difference between PUT and PATCH in Express.js?",
            a: "PUT replaces the entire resource, while PATCH updates only specified fields of a resource.",
          },
          {
            q: "How do you parse incoming request bodies in Express?",
            a: "Use built-in middleware: express.json() for JSON bodies and express.urlencoded({ extended: true }) for form data.",
          },
          {
            q: "How do you secure an Express.js application?",
            a: "Use Helmet for headers, sanitize inputs, handle errors safely, enable CORS correctly, use HTTPS, and implement authentication & authorization.",
          },
          {
            q: "What is the difference between next() and next(err) in Express?",
            a: "next() passes control to the next middleware, next(err) passes control to error-handling middleware.",
          },
          {
            q: "What are template engines in Express.js?",
            a: "Template engines like EJS, Pug, or Handlebars allow rendering dynamic HTML on the server-side using data from routes.",
          },
          {
            q: "How to handle file uploads in Express.js?",
            a: "Use middleware like 'multer' to handle multipart/form-data for file uploads.",
          },
          {
            q: "What is the difference between synchronous and asynchronous middleware?",
            a: "Synchronous middleware executes immediately and blocks the request until done, while asynchronous middleware uses callbacks or async/await and doesn’t block the event loop.",
          },
          {
            q: "How do you implement logging in Express.js?",
            a: "Use middleware like 'morgan' to log HTTP requests, or custom middleware to log details for debugging and monitoring.",
          },
          {
            q: "How to implement authentication in Express.js?",
            a: "Use sessions (express-session), JWT tokens, OAuth, Passport.js, or custom middleware to protect routes and verify users.",
          },
          {
            q: "What is the difference between REST API and Express.js API?",
            a: "REST API is a design style for APIs. Express.js API is a Node.js implementation to build RESTful or other APIs.",
          },
          {
            q: "How can you structure large Express.js applications?",
            a: "Use MVC pattern, separate routes, controllers, models, middleware, config files, and utils into different folders for maintainability.",
          },
          {
            q: "What is the difference between app.use() and router.use()?",
            a: "app.use() mounts middleware at the application level, router.use() mounts middleware specific to a router instance.",
          },
        ],
      },
    ],
  },
};
