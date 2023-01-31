# What is the difference between named export and default export and "\*" as export ?

1.  named export

    - when we have multiple components inside one file and we want to export only one component then we can export it as named export and use it in other files/components. The name should be exact while importing it.

    Example - export Title = ()=>{}

        we can import Title as named export
        import {Titles} from './abc.js'

2.  default export

    - when we want to export only one default component from a file then we use default export.

    Example - Title = ()=>{}
    export default Title;

        we can export it as
        import Title from './abc.js

3.  - export as

    * when we use \* as export it will export all the components as an object with properties which we can use as obj.components.

    Example - import \* as title from "./Title.js"

                title.Title
                title.Heading

# what is the importance of config.js file?

- we can use config.js file to store a common value that we need to use in more than one place. using the config file we can modify the value in one place whenever needed.

# What are React hooks?

- React hooks provide us with the functionality to manage the state in our components.

# Why do we need a useState hook?

- useState hooks provide us to create state variables in our components. State variables allow React to update the state and trigger reconciliation to render the change.
