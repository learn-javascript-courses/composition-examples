# composition-examples

Examples for The Two Pillars of JavaScript: Prototypal OO - Object Composition

## Related Links

* [Learn JavaScript with Eric Elliott](https://ericelliottjs.com)
* [Composition with Prototypes Webcast Recording](https://ericelliottjs.com/product/webcast-monday-oct-19th-the-two-pillars-of-js-composition-with-prototypes/) - [Direct Link for members](https://github.com/learn-javascript-courses/composition-examples).
* ["Design Patterns: Elements of Reusable Object-Oriented Software](http://www.amazon.com/gp/product/0201634988?ie=UTF8&camp=213733&creative=393185&creativeASIN=0201634988&linkCode=shr&tag=eejs-20&linkId=TMIKXHFQF7AJOQUF)
* [Chat about object composition](https://gitter.im/stampit-org/stampit) with stamp experts
* [Classical Inheritance is Obsolete: How to Think in Prototypal OO](https://vimeo.com/69255635)
* [The Two Pillars of JavaScript Part 1: How to Escape the 7th Circle of Hell](https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3)
* [Common Misconceptions About Inheritance in JavaScript](https://medium.com/javascript-scene/common-misconceptions-about-inheritance-in-javascript-d5d9bab29b0a)
* [Inside the Dev Team Death Spiral](https://medium.com/javascript-scene/inside-the-dev-team-death-spiral-6a7ea255467b)
* [The Open Minded Explorer's Guide to Object Composition](https://medium.com/javascript-scene/the-open-minded-explorer-s-guide-to-object-composition-88fe68961bed)
* [Introducing the Stamp Specification](https://medium.com/javascript-scene/introducing-the-stamp-specification-77f8911c2fee)
* [The Stamp Specification](https://github.com/stampit-org/stamp-specification)
* [Mori](https://github.com/swannodette/mori)
* [Immutable JS](https://facebook.github.io/immutable-js/)
* [Redux](https://github.com/rackt/redux)
* [Redux DevTools](https://github.com/gaearon/redux-devtools)
* [Cerebral debugger demo](https://www.youtube.com/watch?v=Fo86aiBoomE)
* [React PropTypes documentation](https://facebook.github.io/react/docs/reusable-components.html)
* [TypeScript](http://www.typescriptlang.org/) (compile to JS superset language. Runtime support is experimental as of October 2015.
* [JSON-Schema](http://json-schema.org/documentation.html)
* [rtype](https://github.com/ericelliott/rtype#rtype)
* [rfx](https://github.com/ericelliott/rfx)


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

