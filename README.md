# React-Redux-Saga-Tutorial

### Prerequisites:
- Have Node.js and git installed
- Have a terminal
- Have a comfortable editor (Webstorm, Sublime Text, Vim, VSCode ...)

### Initialization:
- Go to the desired parent directory and `git clone` the project.
- Go in the newly created directory, type `npm init` and follow the instructions
to create the initial `package.json` file

### Step 1 - read the comments in the files to understand the logic:
- Add the dependencies we are going to use with the format `npm install dep@version`.

- Add the start, lock and lint commands in the `package.json` file:
  `npm start` to initiate the development server.
  `npm lock` to lock the dependencies versions after installing a new one.
  `npm lint` to find syntax errors using eslint

- Lock the versions with `npm lock`

- Modify `node_modules/react-hot-loader/dist/react-hot-loader.development.js`
  using this link: https://github.com/gaearon/react-hot-loader/pull/990/files

- Add the `.babelrc`, `.eslintrc`, `postcss.config.js` configuration files:
  Babel allows you to use the latest js syntax and have it work on all browsers
  Eslint allows you to implement syntax rules that the developers in the project must follow
  Postcss allows makes the css rules work in different browsers

- Add the `packages/connect-bootstrap-2.1.1.tar.gz` for the main styles.

- Add the basic html file as `app/index.html`.

- Add the basic js file as `app/js/index.js`.

- Add the scss files in `app/styles/*`.

- Add the fonts files in `app/fonts/*`

- Add the basic `devServer.js` file and read the comments to understand what each thing does.

- Add the `webpack.config.js` file and skim through it to get a basic idea of
  the things used - look at the webpack documentation if you need extra info.

- Add the basic `routes/rootRouter.js` file

- Once you initiate the development server with `npm start`, you can go to
  http://locahost:3000 to see the running app

### Step 2 - write out everything from now on instead of copy/pasting:
- Go and do the react tutorial at https://reactjs.org/tutorial/tutorial.html#adding-time-travel
  if you haven't already
- 
