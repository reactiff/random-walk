# @reactiff/random-walk

Generate random number sequences that are more characteristic of Price Movements i.e. trending.

[![NPM](https://img.shields.io/npm/v/@reactiff/random-walk.svg)](https://www.npmjs.com/package/@reactiff/random-walk) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


<br>


# 2. Git init

Did you create the repo on github? https://github.com/reactiff?tab=repositories

```bash
# in root 

git init
git commit -m "Initial commit"
git branch -M master
git remote add origin https://github.com/reactiff/random-walk.git
git push -u origin master
```

<br>

# 3. Install, link and start
```bash
# in root

yarn link
yarn install
yarn start

cd example
yarn link "@reactiff/random-walk"
yarn install
yarn start
```

> DELETE THE ABOVE INSTRUCTIONS AFTER YOU'RE DONE


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

const generatePrice() {
    
    console.log( rndWalk.next() );
    
    // run again after delay
    setTimeout(generatePrice, 500);
}

generatePrice();
```


## License

MIT © [reactiff](https://github.com/reactiff)
