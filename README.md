# ReduxSimpleStarter
The origins of this repo are in Stephen Grider's [Udemy course](https://www.udemy.com/react-redux/) on React and Redux.

It has begun as a clone of [this repo](https://github.com/StephenGrider/ReduxSimpleStarter) and will evolve as I continue reviewing the course.

Checkout that repo, install dependencies, then start the `gulp` process with the following:

    > git clone https://github.com/StephenGrider/ReduxSimpleStarter.git
    > cd ReduxSimpleStarter
    > npm install
    > npm start

I'm relying on Stephen Grider's tutorial as I revisit React in 2018. The commits I make to this repo are meant to document my learning and review process. The motivation for this repo is similar to the motivation for [this Django repo](https://github.com/eirinikos/django-tutorial-mysite); that is, I want to write a handy study journal (a log) that my future self can read when she revisits this moment in time.

### React, ES6, and JSX
React is a JS library that produces HTML, and React code is written in the form of individual **components** (i.e., views).

The legibility of React code depends largely on the usage of JSX, which allows us to write JS functions that incorporate HTML syntax.

Our app incorporates ES6 conventions (however, neither JSX nor ES6 are currently interpretable by the browser).

Our app is made browser-ready thanks to **webpack, babel, and `bundle.js`**.

In our `/index.html` file, our script tag references `bundle.js`, which represents the sum of all of the JS in our app. [webpack](https://en.wikipedia.org/wiki/Webpack) and [babel](https://babeljs.io/) are the libraries responsible for compiling All The JS into `bundle.js`. It's not yet clear to me *exactly* how webpack and babel work with each other and *exactly* where `bundle.js` lives, but the [webpack config file](https://github.com/eirinikos/ReduxSimpleStarter/blob/master/webpack.config.js) seems to lend clues.

Babel is what we rely on to transpile our ES6 to vanilla JS (i.e., browser-readable ES5). Try playing around in babel's [in-browser REPL](https://babeljs.io/) to see just how illegible React code can become (if written in plain ES5 script).
