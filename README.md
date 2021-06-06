# @reactiff/random-walk

Generates random number sequences that are more characteristic of Price Movements i.e. trending.

[![NPM](https://img.shields.io/npm/v/@reactiff/random-walk.svg)](https://www.npmjs.com/package/@reactiff/random-walk) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)



## Install

```bash
yarn add @reactiff/random-walk
```

## Usage

```tsx
import RandomWalk from '@reactiff/random-walk'

const rndWalk = new RandomWalk(
    1,      // min:         number
    1000,   // max:         number
    500,    // start:       number
    10,     // maxTrend:    number - max number of steps
    10      // maxStep:     number - max step size 
);

const generatePrice = () => {
    
    console.log( rndWalk.next() );
    
    // run again after delay
    setTimeout(generatePrice, 500);
}

generatePrice();
```

---

## Publishing the package to npm

```bash
# if scoped and free account
npm publish --access public

# otherwise
npm publish

```

to update
```bash
npm version major|minor|patch
```

and then simply
```bash
npm publish
```

---


## License
MIT © [Rick Ellis](https://github.com/reactiff)
