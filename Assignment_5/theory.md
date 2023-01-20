# What is the difference between named export and default export and \* as export ?

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

3. * export as

    - when we use * as export it will export all the components as an object with properties which we can use as obj.components.

     Example - {}
