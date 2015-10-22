# composition-examples

Examples for The Two Pillars of JavaScript: Prototypal OO - Object Composition

## Related Links

### Courses & Webcasts

For in-depth video discussion of these examples with Q&A, watch the [Composition with Prototypes Webcast Recording](https://ericelliottjs.com/product/webcast-monday-oct-19th-the-two-pillars-of-js-composition-with-prototypes/).

* [Learn JavaScript with Eric Elliott](https://ericelliottjs.com).
* [Direct Link for members](https://ericelliottjs.com/premium-content/two-pillars-composition-with-prototypes/).

### Referenced Books
* ["Design Patterns: Elements of Reusable Object-Oriented Software"](http://www.amazon.com/gp/product/0201634988?ie=UTF8&camp=213733&creative=393185&creativeASIN=0201634988&linkCode=shr&tag=eejs-20&linkId=TMIKXHFQF7AJOQUF) by the Gang of Four.
* ["Refactoring: Improving the Design of Existing Code"](http://www.amazon.com/gp/product/0201485672?ie=UTF8&camp=213733&creative=393185&creativeASIN=0201485672&linkCode=shr&tag=eejs-20&linkId=Z3J7SLZ25QEGYKJ6&creativeASIN=0201485672) by Martin Fowler, Kent Beck, John Brant, William Opdyke, Don Roberts.
* ["Coders at Work: Reflections on the Art of Programming"](http://www.amazon.com/gp/product/1430219483?ie=UTF8&camp=213733&creative=393185&creativeASIN=1430219483&linkCode=shr&tag=eejs-20&linkId=LOH6AUEYXFSKKFTP) by Peter Seibel - the origin of the gorilla banana problem from Joe Armstrong.

### Chat
* [Chat about object composition](https://gitter.im/stampit-org/stampit) with stamp experts.

### Articles
* [Classical Inheritance is Obsolete: How to Think in Prototypal OO](https://vimeo.com/69255635).
* [Composition Over Inheritance](https://www.youtube.com/watch?v=wfMtDGfHWpA). #video
* [The Two Pillars of JavaScript Part 1: How to Escape the 7th Circle of Hell](https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3).
* [How to Fix the ES6 `class` Keyword](https://medium.com/javascript-scene/how-to-fix-the-es6-class-keyword-2d42bb3f4caf)
* [Common Misconceptions About Inheritance in JavaScript](https://medium.com/javascript-scene/common-misconceptions-about-inheritance-in-javascript-d5d9bab29b0a).
* [Inside the Dev Team Death Spiral](https://medium.com/javascript-scene/inside-the-dev-team-death-spiral-6a7ea255467b).
* [The Open Minded Explorer's Guide to Object Composition](https://medium.com/javascript-scene/the-open-minded-explorer-s-guide-to-object-composition-88fe68961bed).
* [Introducing the Stamp Specification](https://medium.com/javascript-scene/introducing-the-stamp-specification-77f8911c2fee).

### Libraries and Code
* [The Stamp Specification](https://github.com/stampit-org/stamp-specification)
* [Stamp Utils](https://github.com/stampit-org/stamp-utils)
* [Stampit](https://github.com/stampit-org/stampit)
* [React Stamp](https://github.com/stampit-org/react-stamp) Use this instead of `class` when you need React lifecycle methods.
* [React Pure Component Starter](https://github.com/ericelliott/react-pure-component-starter) Use React pure components if you don't need React's lifecycle hooks for your component.
* [Mori](https://github.com/swannodette/mori) Immutable datatypes from Clojure ported to JavaScript.
* [Immutable JS](https://facebook.github.io/immutable-js/) Facebook's OSS Immutable library.
* [Redux](https://github.com/rackt/redux) Pure functions for app state updates.
* [Dan Abromov's Redux Dev Tools talk at React Europe](https://www.youtube.com/watch?v=xsSnOQynTHs)
* [Redux DevTools](https://github.com/gaearon/redux-devtools) Great developer tools for Redux apps (including time travel debugger).
* [Cerebral debugger demo](https://www.youtube.com/watch?v=Fo86aiBoomE) One of the first time travel debuggers for JS.
* [React PropTypes documentation](https://facebook.github.io/react/docs/reusable-components.html) Runtime structural type checks in JavaScript.
* [TypeScript](http://www.typescriptlang.org/) Compile to JS language. Runtime reflection support is experimental as of October 2015. Not recommended for production.
* [JSON-Schema](http://json-schema.org/documentation.html) A tried and tested spec for JSON object data validation.
* [rtype](https://github.com/ericelliott/rtype#rtype) A TypeScript-inspired structural type notation for JavaScript.
* [rfx](https://github.com/ericelliott/rfx) Runtime library support for structurally-typed interfaces in JavaScript.

## Prep Your Computer to Follow Along

**What You'll Need:**

* Node v4+ (For the best experience on Mac and Linux, [install with nvm](https://github.com/creationix/nvm))
* [Git](https://help.github.com/articles/set-up-git/)
* Your favorite text editor (or try [Atom.IO](https://atom.io/))
* This repo (see "Getting Started")


## Getting Started

### Clone & install:

```sh
git clone git@github.com:learn-javascript-courses/composition-examples.git
cd composition-examples
npm install
```

### Start Dev Console

```sh
npm run watch
```

Experiment with the files in `examples/` and `test/`. Whenever you save, the dev console will run lint and the test suite automatically.

You can exit the console by pressing CTRL+C (Win keyboard) or Command+C (Mac keyboard).


### Testing Individual Examples

For your convenience, there are `npm` scripts set up in `package.json`:

```js
    "----- Examples ----":"",
    "shape": "babel-node test/shape/index.js",
    "highpass": "babel-node test/highpass/index.js",
    "gorilla-banana/v1": "babel-node test/gorilla-banana/v1/index.js",
    "gorilla-banana/v1/fail": "babel-node test/gorilla-banana/v1/fail.js"
    ...
```

You can run these by typing:

```sh
npm run -s <examplename>
```

e.g.:

```sh
npm run -s gorilla-banana/v1
```

The `-s` option supresses the `npm` error page, which tends to scroll test failures off the top of the screen.

Some of the individual examples demonstrate test failures. They're excluded from the main test suite because they're expected to fail.


## Practical Uses of Object Composition

Lots of people use animals as examples when they talk about inheritance techniques. I think some examples of real use-cases would be better. I commonly use object composition for a number of real-life things in every day app development, including:

**Network & database I/O**:

Connection objects hold state including `host`, `port`, `accessToken`, etc... A connection factory would typically return a connection object with an event emitter composed in to signal to the app when I/O takes place.

**Configuration:**

Typical production apps often get configuration data (such as details of network services it uses, etc...) from a variety of different sources. The app then shares configuration objects with the parts of the app that require it. I frequently compose in an event emitter to the configuration object as well so that we can log when parts of the app request configuration data that is undefined. This alerts us when parts of the app misbehave. It might look something like this:


```js
const configuration = compose(source1, source2, source3, eventEmitter);
```

