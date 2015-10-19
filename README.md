# composition-examples
Examples for The Two Pillars of JavaScript: Prototypal OO

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
