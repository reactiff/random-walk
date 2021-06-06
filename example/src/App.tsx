import React, { useEffect, useMemo, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import RandomWalk from '@reactiff/random-walk'

const rndWalk = new RandomWalk(
  1,      // min:         number
  1000,   // max:         number
  500,    // start:       number
  10,     // maxTrend:    number - max number of steps
  10      // maxStep:     number - max step size 
);

const md = `
[![NPM](https://img.shields.io/npm/v/@reactiff/random-walk.svg)](https://www.npmjs.com/package/@reactiff/random-walk) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
`;

const App = () => {
  const [price, setPrice] = useState(0);
  useEffect(() => {
    const generatePrice = () => {
      setPrice(rndWalk.next());
      setTimeout(generatePrice, 200);
    }
    generatePrice();
  }, [setPrice]);

  const styles = useMemo(() => ({
    box: { 
      border: '4px solid #ffffff',
      padding: 30,
    },
    price: { 
      fontSize: '3rem',
      margin: '0 0 15px 0',

    },
  }), []);

  return (
    <div> 
      
      
      <div className="flex column align-center" >
        <h1>
          @reactiff/random-walk
        </h1>
        
        <p>
          Generates random number sequences that are more characteristic of Price Movements i.e. trending.
        </p>
        <ReactMarkdown>
          {md}
        </ReactMarkdown>
        <div className="flex column align-center" style={styles.box}>
          <h1 style={styles.price}>
            {price.toFixed(2)}
          </h1>
          <div>
            RANDOM WALK
          </div>
        </div>
        <p>
          <a href="https://www.npmjs.com/package/@reactiff/random-walk">npm</a> | <a href="https://github.com/reactiff/random-walk">git</a>
          
        </p>
      </div>
    </div>
  )
}

export default App
