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

