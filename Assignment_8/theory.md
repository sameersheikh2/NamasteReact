# How do you create Nested Routes react-router-dom configuration?

- To create nested routes inside the react-router-dom configuration we need to create children property inside our route object and add nested routes inside. After that, we can use <Outlet/> component to render the child route element.

# What is the order of life cycle method calls in Class Based Components?

- order of life cycle method calls in the class-based components-

  **First initial render phase ->**

  1. constructor()
  2. render()
  3. componentDidMount()

     **Updating phase ->**

     1. render()
     2. componentDidUpdate()

# Why do we use componentDidMount?

- componentDidMount() gets called after the component is mounted into the dom tree. this is a good place to make API requests.

# Why do we use componentWillUnmount()? Show with example

- ComponentWillUnmount() gets called immediately before the component unmounts or the user navigates to a different page to perform clean-up. This clean-up could be clear intervals or stop sending requests to the server.
  Example ->
  componentDidMount() {
  this.timer = setInterval(() => {
  console.log("interval running");
  }, 1000);

      console.log("parent did mount");
      }

  above interval event will keep running even after the user leaves the page and it will create a new event each time the user visits the same page resulting in multiple events. To clean this up we could use componentWillUnmount() to clear the function.
