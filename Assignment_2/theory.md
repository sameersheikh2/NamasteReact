# 1.) What is `NPM`?

- npm is a package manager in our react project because our project depends on so many different packages/dependencies so to install and manage those packages we use npm in our project.

# 2.) What is `Parcel/Webpack`? Why do we need it?

- Parcel/Webpack is a bundler that comes with so many features to help in our code for example bundling our code into one file, minifying code, tree-shaking, image optimization, hot reloading etc.

# 3.)What is `.parcel-cache`

- .parcel-cache contains cache data of our code to minimize the time whenever we rebuild our code. that's how parcel takes less time to rebuild our code.

# 4.)What is `npx`

- npx can execute any packages from our npm repository.

# 5.)What is the difference between `dependencies` vs `devDependencies`

- dependency modules are modules that are required in production.
- devDependency modules are modules that are only required on the developer machine.

# 6.)What is Tree Shaking?

-Tree code means it removes unnecessary code or modules that are not being used in our project.

# 7.) List down your favorite 5 superpowers of Parcel and describe any 3 of them in your own words

- Hot Module Representation
- File watcher -
  > parcel keeps track of our files in real-time for changes.
- Bundling
- Tree shaking -
  > it removes all the unnecessary codes from our project file and modules that are not being used in our project.
- Dependency collection -
  > when parcel builds our code it maintains all the files and code that rely on each other as dependencies.

# 8.)What is `.gitignore`? What should we add and not add to it?

- .gitignore contains all the files we do not need to track or commit in our git. we should add anything that is not important for our project or that can be auto-generated.

# 9.)What is the difference between `package.json` and `package-lock.json`

- package.json file contains all basic information about our project like name, description, author etc.
- package-lock.json file has all the dependencies tree of our project. developers can install the same dependencies as we have in our project.

# 10.)Why should I not modify `package-lock.json`?

 -we should not modify our package-lock.json because it contains a version of the packages we use to build our project. 

# 11.)What is `node_modules`? Is it a good idea to push that on git?

- node_modules are all the list of package/dependencies that is needed to run our project. it is not a good idea to push node_modules on git as it is very big and it's not optimal.

# 12.)What is the `dist` folder?

- dist folder contains the build file of our project.

# 13.)What is `browserlists`

-browserlist is used to make our code compatible with an older or different version of different browsers.
