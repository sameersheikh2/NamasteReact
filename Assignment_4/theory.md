# is JSX mandatory for react?

- JSX is not mandatory for react.

# is ES6 mandatory for react?

- no, es6 is not mandatory for react.

# {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX

- {TitleComponent} is a react element that returns HTML.
- <TitleComponent/> is a react functional component.
- <TitleComponent></TitleComponent> is a react functional component that can render other components inside it.

# how can I write comments in jsx?

- we can write comments in jsx like this
  - // -for single line comment
  - /\* \*/ - for multiple lines comment

# what is <React.Fragment></React.Fragment> & <></>?

- <React.Fragment></React.Fragment> & <></> both are the same thing which allows us to return multiple elements.

# what is virtual DOM?

- virtual DOM is a virtual representation of the DOM tree that react uses to compare and render changes.

# what is reconciliation in react?

- reconciliation is a process that React uses to compare and render changes between virtual dom.

# What is React Fiber?

- react fiber is a new reconciliation process that React uses to load components faster and smoother.

# Why do we need a key in React? When do we need keys in React?
 
 - React needs keys to identify what was changed, added or removed.  We need keys in react when we create a list of elements. 

# Can we use the index as a key in react?

 - React does not recommend using the index as a key as item order can be changed. When we don't have unique keys in lists so as a last resort we can use the index as the key.

