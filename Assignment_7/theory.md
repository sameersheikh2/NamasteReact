# What is a Microservice?

- Microservice is an architectural style to structure applications as a collection of services.
  these services are -
  - Independently deployable
  - Loosely coupled
  - Highly maintainable and testable

# What is Monolith architecture?

- Monolith architecture is an architecture that structures all the functionalities of an application into a single service.

# What is the difference between Monolith and Microservice?

|                 **Monolithic architecture**                  |                                   **Microservices architecture**                                   |
| :----------------------------------------------------------: | :------------------------------------------------------------------------------------------------: |
| it is built as one large system and is usually one code-base |              it is built as small independent module based on business functionality               |
|           It is not easy to scale based on demand            |                                It is easy to scale based on demand                                 |
|                    It has shared database                    |                           Each project and module has their own database                           |
| Large code base makes IDE slow and build time gets increase  | Each project is independent and small in size. So overall build and development time gets decrease |

# Why do we need a useEffect Hook?

- useEffect hook allows us to perform side effects in our components. useEffect let us render something inside our component after the first render.

# What is Optional Chaining?

- optional chaining operator(?.) is like the chaining operator (.) but instead of throwing an error when the reference is null, it returns the value of undefined.
  Example -
  const obj = {
  name: 'Robert',
  cat: {
  name: 'Jack'
  }
  };

const dogName = obj.dog?.name;
console.log(dogName); //output : undefined
const dogName = obj.dog.name;
console.log(dogName); //output : Error: Cannot read properties of undefined (reading 'name')

# What is Shimmer UI?

- Shimmer UI is a loading effect that helps to create a better user experience for showing loading data instead of the usual loading or progress bar.

# What is the difference between JS expression and JS statement?

- A JavaScript program is a sequence of statements. Each statement is an instruction for the computer to do something.
  let x = 5;
- an expression is a bit of JavaScript code that produces a value.
  1 → produces 1
  "hello" → produces "hello"

# What is Conditional Rendering, explain with a code example

- in our application, we can show some components based on condition or state. For example login and logout components can be shown based on user login status.

  const Header = ()=>{
  const [loggedIn , setLoggedIn] = useState(false)
  return (
  <>
   <h1> {loggedIn ? "user logged in" : "user logged out"} </h1>
   <button onClick={()=>{setLoggedIn(!loggedIn)}}>Click me</button>
   </>
   )
   }

  above code will show the user logged in or logged out based on the user login state using the JavaScript ternary operator.
  we can also use if else and && operators to check if the user logged in or logged out.

# What is CORS?

- CORS stands for Cross-Origin Resource Sharing which allows us to request restricted resources on the webpage from one domain to another domain.

# What is async and await?

- async and await keywords allow us to write asynchronous, promise-based functions to be written cleanly.

# What is the use of const json = await data.json(); in getRestaurants()

- const json = await data.json() is being used here for the promise to be fulfilled and then parsing the promise to return as a JavaScript object.

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
    ],
  },
]);