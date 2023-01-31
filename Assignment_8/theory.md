# What are various ways to add images to our App? Explain with code examples

1.  By providing the path or URL of the image in <img/ >.

- <img src="https://example.com/img.png" alt="image" / >

2. Adding the image from our project by importing the image.
   import image from "./src/image.png"

- <img src={image} alt="image">

# What would happen if we do console.log(useState())?

- if we do a console.log(useState()) then it will give us an array [undefined, function].
  where the first element undefined is the initial state and the second is a function that bound dispatchSetState(used for updating the state).

# What is SPA?

- Single Page Application (SPA) is a web implementation that shows a single document and updates the body content based on changes without reloading the whole page.

# What is the difference between Client Side Routing and Server Side Routing?

- In Server Side Routing whenever we visit a site in the browser, it requests the server for the HTML page and then loads the page into the browser. Every time we click on a link to visit another page, the browser requests the server and then loads the HTML page. Rendering these pages can take a few milliseconds but sometimes it may take seconds to load.

- In Client-Side Routing browser loads the content using JavaScript. So instead of requesting the server for the HTML page, we loads the page into the browser using JavaScript.

