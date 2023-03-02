# Explore all the ways of writing CSS.

1.  Inline CSS - style{{color: "red"}},

2.  External CSS - import 'index.css',

3.  Styled Components -

        first `npm i styled-components`

        function Profile() {

    return (
    <div>
    <StyledButton >Button A</StyledButton>
    <StyledButton >Button B</StyledButton>
    </div>
    )
    }
        - {const StyledButton = styled.button`
          min-width: 200px;
          border: none;
          font-size: 18px;
          padding: 7px 10px;}

4.  Framework - Like bootstrap , tailwind etc.
5.  SCSS
6.  Component liabrary - material UI , tailwind UI etc.

# How do we configure tailwind?

- After installing tailwindcss by using `npm install -D tailwindcss postcss`
- We can gernaerate tailwind.config.js by using `npx tailwindcss init`
- then confgiure postcss by creating postcssrc file inside our folder & add these line -

  > {
  > "plugins": {
  > "tailwindcss": {}
  > }
  > }

- Inside tailwindcss.config.js add the following -

  > /** @type {import('tailwindcss').Config} \*/
  > module.exports = {
  > content: [
  > "./src/**/\*.{html,js,ts,jsx,tsx}",
  > ],
  > theme: {
  > extend: {},
  > },
  > plugins: [],
  > }

- Inside index.css add the following
  > @tailwind base;
  > @tailwind components;
  > @tailwind utilities;

# In tailwind.config.js, what do all the keys mean (content, theme, extend, plugins)?

1.  Content

    - in a content section inside `tailwind.config.js` we configure path to all the files which contain tailwind classes.
      - module.exports = {
        content: [
        './src/**/*.{html,js,jsx,ts,tsx}',
        './components/**/*.{html,js}',
        ],

2.  Theme

    - in a theme section inside `tailwind.config.js` we have default values for the color palette, type scale, fonts, breakpoints etc.

3.  Extend {inside theme}

    - we can also define custom values with default values under `extend` inside `theme`. - module.exports = {

      theme: {
      extend: {
      // Adds a new breakpoint in addition to the default breakpoints
      text: {
      'xxxl': '100px',
      }
      }
      }
      }

4.  Plugins

    - Plugins let us provide a new style for Tailwind to use in our project using javascript instead of CSS.

      - const plugin = require('tailwindcss/plugin')
        module.exports = {
        plugins: [
        plugin(function({ addUtilities, addComponents, e, config }) {
        // Add your custom styles here
        }),
        ]
        }

# Why do we have .postcssrc file?

.postcssrc file uses a plugin to parse our tailwindcss classes into CSS so our bundler can use tailwindcss classes in our app.

# What is prop drilling?

- Prop drilling is a technique where data is passed from one component through multiple components until it gets to the component where the data is needed. The data could be passed from the parent component to the children's children component.

# What is lifting the state up?

- Lifting the state up means giving the state control of children components to the closest parent component and then passing the data as props.
