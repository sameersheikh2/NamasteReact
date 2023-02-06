# When and why do we need lazy()?

- lazy() is used to dynamically import a component when it needs to be rendered, instead of importing at the beginning when the file loads. This is called Code Splitting/ On-demanding loading.

# What is suspense?

- Suspense is a react component that let us wait for the code(dynamically imported component) to be available to load/render.

# Why we got this error: A component was suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix updates that suspend should be wrapped with startTransition? How does suspense fix this error?

- Suspense let us wait until the component is dynamically imported and ready to load, meanwhile we can show a loading indicator.

# Advantages and disadvantages of using this code-splitting pattern?

# When do we and why do we need suspense?

- When we use dynamic import to load a component, React tries to load the component even before it is available to render. So in this case React suspends the loading and this will throw us an error. To prevent this we use suspense to wrap our dynamic imported components.
